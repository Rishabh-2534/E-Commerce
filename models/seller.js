import mongoose from "mongoose";
const sellerSchema= new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    name:String,
    verified:{type:Boolean ,default:false},
    address: String,
    accountId: {type:mongoose.Schema.Types.ObjectId,ref:"Account"},
});

const Seller= mongoose.model("Seller",sellerSchema);
export default Seller;