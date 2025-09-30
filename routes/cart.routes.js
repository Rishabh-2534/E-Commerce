import express from "express";
import { authMiddleware,roleCheckMiddleware } from "../middleware/roleCheck.middleware.js";
const router= express.Router();
import {
  getCart,
  addToCart,
  removeFromCart,
  emptyCart,
} from "../controllers/buyer.controller.js";

router.use(authMiddleware);


router.get("/items",roleCheckMiddleware(["buyer"]),getCart);
router.post("/items/:itemId",roleCheckMiddleware(["buyer"]),addToCart);
router.delete("/items/:itemId",roleCheckMiddleware(["buyer"]),removeFromCart);
router.delete("/",roleCheckMiddleware(["buyer"]),emptyCart);
export default router;