import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:String,
    verified:{type:Boolean,default:false},
    isDeleted:{type:Boolean,default:false},
},{timestamps:true});

const Category = mongoose.model("Category",categorySchema);
export default Category;