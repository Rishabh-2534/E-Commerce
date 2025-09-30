import express from "express";
import {
  addProduct,
  removeProduct,
  updateProduct,
} from "../controllers/seller.controller.js";
import {listVerifiedProducts} from "../controllers/buyer.controller.js";
import { listProducts } from "../repository/buyer.repository.js";
import { authMiddleware ,roleCheckMiddleware} from "../middleware/roleCheck.middleware.js";
import { verifyProduct } from "../controllers/admin.controller.js";
const router= express.Router();
router.use(authMiddleware);

router.get("/verified",roleCheckMiddleware(["buyer"]),listVerifiedProducts);
router.get("/",roleCheckMiddleware(["seller","admin"]),listProducts);
router.post("/",roleCheckMiddleware(["seller"]),addProduct);
router.delete("/:itemId",roleCheckMiddleware(["Seller","admin"]),removeProduct);
router.patch("/:itemId",roleCheckMiddleware(["seller"]),updateProduct);
router.post("/verify/:productId",roleCheckMiddleware(["admin"]), verifyProduct);

export default router;