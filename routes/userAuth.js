import express from "express";
const router= express.Router();
import {isAdminMiddleware} from "../middleware/isAdminMiddleware.js"
router.post("/users",registerUser);
router.post("/login",loginUser);

router.patch("/users/update/:userId",isUserMiddleware,updateDetails);
router.post("/logout",isUserMiddleware,logoutUser);
