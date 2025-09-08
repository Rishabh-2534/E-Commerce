import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:String,
    isDeleted:{type:Boolean,default:false},
},{timestamps:true});

export const Category = mongoose.model("Category",categorySchema);