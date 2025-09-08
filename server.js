import express from "express";
import dotenv from "dotenv";
import User from "./models/user.js";
import { responseHandler } from "./middleware/responseHandler.js";
const app= express();
dotenv.config();
app.use(responseHandler);
app.get("/",(req,res)=>{
    res.json({message:"hello from server"});
})
app.listen(process.env.PORT,()=>{
    console.log("Server running at port ",process.env.PORT);
});
