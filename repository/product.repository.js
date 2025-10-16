import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

export async function listProducts() {
  return await Product.find(); 
}
export async function listSellerProducts(sellerId){
  return await Product.find({userId:sellerId});
}
export async function listVerifiedProducts() {
  return await Product.find({verified:true});
}
export async function verifyProduct(productId) {
  return await Product.findByIdAndUpdate(productId, { verified: true }, { new: true }); 
}
export async function removeProduct(itemId) {
  return await Product.findByIdAndUpdate(itemId, { isDeleted: true });
}
export async function addProduct(data) {
  return await Product.create(data);
}
export async function updateProduct(itemId, data) {
  return await Product.findByIdAndUpdate(itemId, data, { new: true });
}
