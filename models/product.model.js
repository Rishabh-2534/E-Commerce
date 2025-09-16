import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true},
    price:Number,
    brand:String,
    verified:Boolean,
    description:String,
    isDeleted:{type:Boolean,default:false},
},{timestamps:true,_id:false});
const Product= mongoose.model("Product",productSchema);
export default Product;
