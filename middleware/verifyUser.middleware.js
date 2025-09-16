import jwt from "jsonwebtoken";
import User  from "../models/user.model.js";

export function roleCheckMiddleware(allowedRoles = []) {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      req.user = { userId: user.id, email: user.email, role: user.role };
      next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  };
}
