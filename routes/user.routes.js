import express from "express";
import { 
  updateUserDetails, 
  requestPasswordChange, 
  confirmPasswordChange,
} from "../controllers/auth.controller.js";
import {
  listUsers,
  deleteUser,
  verifyUser,
  deactivateUser,
} from "../controllers/user.controller.js";
import { authMiddleware ,roleCheckMiddleware} from "../middleware/roleCheck.middleware.js";
import { passwordChangeValidator ,IdValidator,validateRequest} from "../middleware/validator.middleware.js";

const router= express.Router();
router.use(authMiddleware);
router.get("/",roleCheckMiddleware(["admin"]) ,listUsers);
router.delete("/:userId",IdValidator("userId"),validateRequest,roleCheckMiddleware(["admin"]), deleteUser);
router.post("/verify/:userId",IdValidator("userId"),validateRequest,roleCheckMiddleware(["admin"]), verifyUser);
router.post("/deactivate/:userId",IdValidator("userId"),validateRequest,roleCheckMiddleware(["admin"]), deactivateUser);
router.post("/change-password",passwordChangeValidator,validateRequest,roleCheckMiddleware(["seller", "buyer", "admin"]), requestPasswordChange); 
router.get("/change-password/confirm/:token", confirmPasswordChange);
router.patch("/update",roleCheckMiddleware(["seller", "buyer", "admin"]), updateUserDetails); 

export default router;