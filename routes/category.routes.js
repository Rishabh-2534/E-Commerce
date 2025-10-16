import express from "express";
const router = express.Router();

import {
  createCategory,
  deleteCategory,
  requestAddCategory 
} from "../controllers/category.controller.js";
import {IdValidator,validateRequest} from "../middleware/validator.middleware.js";
import {authMiddleware, roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
router.use(authMiddleware);

router.post("/requests",roleCheckMiddleware(["seller"]),requestAddCategory);
router.post("/", roleCheckMiddleware(["admin"]),createCategory);
router.delete("/:categoryId",IdValidator("categoryId"),validateRequest,roleCheckMiddleware(["admin"]), deleteCategory);
export default router;