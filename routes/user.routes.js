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
} from "../controllers/admin.controller.js";
import { authMiddleware ,roleCheckMiddleware} from "../middleware/roleCheck.middleware.js";
import { passwordChangeValidator } from "../middleware/validator.middleware.js";

const router= express.Router();
router.use(authMiddleware);
router.get("/",roleCheckMiddleware(["admin"]) ,listUsers);
router.delete("/:userId",roleCheckMiddleware(["admin"]), deleteUser);
router.post("/verify/:userId",roleCheckMiddleware(["admin"]), verifyUser);
router.post("/deactivate/:userId",roleCheckMiddleware(["admin"]), deactivateUser);
router.post("/change-password",passwordChangeValidator,roleCheckMiddleware(["seller", "buyer", "admin"]), requestPasswordChange); 
router.get("/change-password/confirm/:token",/*roleCheckMiddleware(["seller", "buyer", "admin"]),*/ confirmPasswordChange);
router.patch("/update",roleCheckMiddleware(["seller", "buyer", "admin"]), updateUserDetails); 

export default router;