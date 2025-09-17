import jwt from "jsonwebtoken";
import User  from "../models/user.model.js";
import Seller from "../models/seller.model.js";

export function roleCheckMiddleware(allowedRoles = []) {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.error({ message: "No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const currentUser=await User.findById(decoded._id);
      const seller= await Seller.findOne({sellerId:decoded._id});
      if (decoded.role === "seller" && !seller.verified) {
        return res.error({message:"not verified seller"},403);
      }

      // Check allowed roles
      if (!allowedRoles.includes(decoded.role)) {
        return res.error({ message: "Access denied" });
      }

      // Attach user info to request
      req.user = currentUser
       
     next();
    } catch (err) {
      return res.error({ message: "Invalid or expired token" });
    }
  };
}
