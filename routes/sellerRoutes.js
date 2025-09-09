import express from "express";
const router= express.Router();

router.use(verifySellerMiddleware);

router.post("/category/requests",requestAddCategory);

router.post("/product",addProduct);
router.delete("/product/:itemId",removeProduct);
router.patch("/product/:itemId",updateProduct);
