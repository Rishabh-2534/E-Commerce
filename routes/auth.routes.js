import express from "express";
const router = express.Router();

import { roleCheckMiddleware } from "../middleware/verifyUser.middleware.js";
import { 
  registerUser, 
  loginUser, 
  updateUserDetails, 
  requestPasswordChange, 
  confirmPasswordChange,
  logoutUser
} from "../controllers/auth.controller.js";


// Auth/User routes
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.patch("/users/update",roleCheckMiddleware(["seller", "buyer", "admin"]), updateUserDetails); 
router.post("/logout",roleCheckMiddleware(["seller", "buyer", "admin"]), logoutUser);

// Password change routes
router.post("/users/change-password",roleCheckMiddleware(["seller", "buyer", "admin"]), requestPasswordChange); 
router.get("/users/change-password/confirm/:token",/*roleCheckMiddleware(["seller", "buyer", "admin"]),*/ confirmPasswordChange);

export default router;
