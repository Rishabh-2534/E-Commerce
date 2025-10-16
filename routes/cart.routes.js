import express from "express";
import { authMiddleware,roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
const router= express.Router();
import {
  getCart,
  addToCart,
  removeFromCart,
  emptyCart,
} from "../controllers/cart.controller.js";
import {IdValidator,validateRequest} from "../middleware/validator.middleware.js";
router.use(authMiddleware);


router.get("/items",roleCheckMiddleware(["buyer"]),getCart);
router.post("/items/:itemId",IdValidator("itemId"),validateRequest,roleCheckMiddleware(["buyer"]),addToCart);
router.delete("/items/:itemId",IdValidator("itemId"),validateRequest,roleCheckMiddleware(["buyer"]),removeFromCart);
router.delete("/",roleCheckMiddleware(["buyer"]),emptyCart);
export default router;