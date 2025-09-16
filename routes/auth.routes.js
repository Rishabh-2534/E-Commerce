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

router.use(roleCheckMiddleware(["seller", "buyer", "admin"]));

// Auth/User routes
router.post("/users", registerUser);
router.post("/login", loginUser);
router.patch("/users/update", updateUserDetails); 
router.post("/logout", logoutUser);

// Password change routes
router.post("/users/change-password", requestPasswordChange); 
router.get("/users/change-password/confirm/:token", confirmPasswordChange);

export default router;
