import mongoose from "mongoose";
const accountSchema= new mongoose.Schema({
    accountNumber:String,
    bankName:String,
    ifscCode:String,
    accountType:String
});
const Account= mongoose.model("Account",accountSchema);
export default Account ;