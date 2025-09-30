import express from "express";
const router = express.Router();

import {
  createCategory,
  deleteCategory,
} from "../controllers/admin.controller.js";
import {authMiddleware, roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
import { requestAddCategory } from "../controllers/seller.controller.js";
router.use(authMiddleware);

router.post("/requests",roleCheckMiddleware(["seller"]),requestAddCategory);
router.post("/", roleCheckMiddleware(["admin"]),createCategory);
router.delete("/:categoryId",roleCheckMiddleware(["admin"]), deleteCategory);
export default router;