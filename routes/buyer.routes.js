import express from "express";
import { roleCheckMiddleware } from "../middleware/verifyUser.middleware.js";
const router= express.Router();
import {
  listProducts,
  getCart,
  getOrders,
  placeOrder,
  addToCart,
  removeFromCart,
  emptyCart,
} from "../controllers/buyer.controller.js";

router.use(roleCheckMiddleware(["buyer"]));

router.get("/product",listProducts);
router.get("/cart/items",getCart);
router.get("/orders",getOrders);
router.post("/orders",placeOrder);
router.post("/cart/items/:itemId",addToCart);
router.delete("/cart/items/:itemId",removeFromCart);
router.delete("/cart",emptyCart);
export default router;