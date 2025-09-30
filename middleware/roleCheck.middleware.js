import jwt from "jsonwebtoken";
import * as utils from "../utils.js";
import { findUser } from "../repository/user.repository.js";
import {findSeller} from "../repository/seller.repository.js"
//change name
export function roleCheckMiddleware(allowedRoles = []) {
  return async (req, res, next) => {
    try {
      const decoded = req.tokenData; // comes from authMiddleware
      if (!decoded) {
        return res.error({ message: "Token not verified" }, 401);
      }

      // Special case for seller
      if (decoded.role === "seller") {
        const seller = findSeller(decoded._id );
        if (!seller || !seller.verified) {
          return res.error({ message: "Not a verified seller" }, 403);
        }
      }

      // Check allowed roles
      if (!allowedRoles.includes(decoded.role)) {
        return res.error({ message: "Access denied" }, 403);
      }

      next();
    } catch (err) {
      return res.error({ message: "Role check failed" }, 500);
    }

  };
}
export function authMiddleware(req,res,next){
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.error({ message: "No token provided" }, 401);
    }

    const token = authHeader.split(" ")[1];
    const decoded = utils.verifyJwtToken(token, process.env.JWT_SECRET);

    const currentUser=findUser(decoded._id);
    if (!currentUser) {
      return res.error({ message: "User not found" }, 404);
    }

    // Attach decoded token + user to request
    req.user = currentUser;
    req.tokenData = decoded;

    next();
  } catch (err) {
    return res.error({ message: "Invalid or expired token" }, 401);
  }

}
