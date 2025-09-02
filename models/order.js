import mongoose from "mongoose";
const orderSchema= new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
    quantity:Number,
    paid:{type:Boolean,default:false},
    Delivered:{type:Boolean ,default:false}
},{timestamps:true});
export const Order= mongoose.model("Order",orderSchema);