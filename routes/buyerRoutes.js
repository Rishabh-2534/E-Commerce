import express from "express";
const router= express.Router();

router.get("/product",listProducts);
router.get("/cart/items",getCart);
router.get("/orders",getOrders);
router.post("/orders/:itemId",placeOrder);
router.post("/cart/items/:itemId",addToCart);
router.delete("/cart/items/:itemId",removeFromCart);
router.delete("/cart",emptyCart);
