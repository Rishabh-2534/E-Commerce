import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true},
    price:Number,
    brand:String,
    verified:Boolean,
    description:String
});
export const Product= mongoose.model("Product",productSchema);
