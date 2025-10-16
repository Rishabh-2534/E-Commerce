import express from "express";
const router = express.Router();

import { authMiddleware,roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
import {registerValidator,loginValidator,validateRequest} from "../middleware/validator.middleware.js";
import { 
  registerUser, 
  loginUser, 
  logoutUser
} from "../controllers/auth.controller.js";


// Auth/User routes
router.post("/signup",registerValidator,validateRequest, registerUser);
router.post("/login",loginValidator, validateRequest,loginUser);
router.post("/logout",authMiddleware,roleCheckMiddleware(["seller", "buyer", "admin"]), logoutUser);


export default router;
