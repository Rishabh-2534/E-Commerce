import express from "express";
import {isAdminMiddleware} from "../middleware/isAdminMiddleware.js";

const router= express.Router();
router.use(isAdminMiddleware);

router.get("users",listUsers);
router.delete("/users/:userId",deleteUser);
router.post("/users/verify/:userId",verifyUser);
router.post("/users/deactivate/:userId",deactivateUser);

router.get("/product",listProducts);
router.post("/product/:itemId/verify",verifyProduct);



router.post("/category",createCategory);
router.delete("/category/:categoryId",deleteCategory);
