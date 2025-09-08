import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    buyerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    products:[{
        productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
        quantity:Number,
        isDeleted:{type:Boolean,default:false},
    }],
},{timestamps:true});

export const Cart = mongoose.model("Cart",cartSchema);