import mongoose from "mongoose";
const orderSchema= new mongoose.Schema({
    buyerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    products:[{
        productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
        quantity:Number,
        isDeleted:{type:Boolean,default:false},
    }],
    paid:{type:Boolean,default:false},
    delivered:{type:Boolean ,default:false},
    totalPrice:{type:Number,default:0},
},{timestamps:true});
const Order= mongoose.model("Order",orderSchema);
export default  Order;