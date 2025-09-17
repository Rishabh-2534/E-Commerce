import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"Category",required:true},
    price:Number,
    brand:String,
    verified:{type:Boolean,default:false},
    description:String,
    isDeleted:{type:Boolean,default:false},
},{timestamps:true});
const Product= mongoose.model("Product",productSchema);
export default Product;
