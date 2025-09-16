import express from "express";
const router = express.Router();

import {
  listUsers,
  deleteUser,
  verifyUser,
  deactivateUser,
  listProducts,
  verifyProduct,
  createCategory,
  deleteCategory,
} from "../controllers/admin.controller.js";
import { roleCheckMiddleware } from "../middleware/verifyUser.middleware.js";

// Apply admin check middleware to all routes
router.use(roleCheckMiddleware(["admin"]));

// User management routes
router.get("/users", listUsers);
router.delete("/users/:userId", deleteUser);
router.post("/users/verify/:userId", verifyUser);
router.post("/users/deactivate/:userId", deactivateUser);

// Product management routes
router.get("/product", listProducts);
router.post("/product/:itemId/verify", verifyProduct);

// Category management routes
router.post("/category", createCategory);
router.delete("/category/:categoryId", deleteCategory);

export default router;
