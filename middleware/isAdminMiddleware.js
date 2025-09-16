import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model.js";

export async function isAdminMiddleware(req, res, next) {
  try {
    // Get token from Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await UserModel.findOne({ where: { id: decoded.userId } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Check role
    if (user.role !== "admin") {
      return res.status(403).json({ error: "Access denied: Admins only" });
    }

    // Attach user to request
    req.user = { userId: user.id, email: user.email, role: user.role };

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
