import express from "express";
import { roleCheckMiddleware } from "../middleware/verifyUser.middleware.js";
import {
  requestAddCategory,
  addProduct,
  removeProduct,
  updateProduct,
} from "../controllers/seller.controller.js";

const router= express.Router();

router.use(roleCheckMiddleware(["seller"]));

router.post("/category/requests",requestAddCategory);

router.post("/product",addProduct);
router.delete("/product/:itemId",removeProduct);
router.patch("/product/:itemId",updateProduct);
export default router;