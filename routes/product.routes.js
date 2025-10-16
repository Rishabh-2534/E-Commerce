import express from "express";

import { 
  listVerifiedProducts,
  listProducts,
  addProduct,
  removeProduct,
  updateProduct, 
  verifyProduct, } from "../controllers/product.controller.js";
import { authMiddleware ,roleCheckMiddleware} from "../middleware/roleCheck.middleware.js";
import {IdValidator,productDetailValidator,validateRequest} from "../middleware/validator.middleware.js";
const router= express.Router();
router.use(authMiddleware);

router.get("/verified",roleCheckMiddleware(["buyer"]),listVerifiedProducts);
router.get("/",roleCheckMiddleware(["seller","admin"]),listProducts);
router.post("/",productDetailValidator,roleCheckMiddleware(["seller"]),addProduct);
router.delete("/:itemId",IdValidator("itemId"),validateRequest,roleCheckMiddleware(["Seller","admin"]),removeProduct);
router.patch("/:itemId",IdValidator("itemId"),validateRequest,roleCheckMiddleware(["seller"]),updateProduct);
router.post("/verify/:productId",IdValidator("productId"),validateRequest,roleCheckMiddleware(["admin"]), verifyProduct);

export default router;