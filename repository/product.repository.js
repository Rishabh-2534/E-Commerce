import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

export async function listProducts() {
  return await Product.find(); 
}
export async function listVerifiedProducts() {
  return await Product.find({verified:true});
}
export async function verifyProduct(productId) {
  return await Product.findByIdAndUpdate(productId, { verified: true }, { new: true }); 
}


export async function createCategory(data) {
  return await Category.create(data); 
}

export async function deleteCategory(categoryId) {
  return await Category.findByIdAndDelete(categoryId); 
}