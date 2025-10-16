import express from "express";
import { authMiddleware,roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
const router= express.Router();
import {
  getOrders,
  placeOrder
} from "../controllers/cart.controller.js";

router.get("/",authMiddleware,roleCheckMiddleware(["buyer"]),getOrders);
router.post("/",authMiddleware,roleCheckMiddleware(["buyer"]),placeOrder);

export default router;