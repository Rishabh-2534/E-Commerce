import  Category  from "../models/category.model.js";
import  Product  from "../models/product.model.js";

export async function createCategory(data) {
  return await Category.create(data);
} 

export async function requestAddCategory(data) {
  return await Category.create({ ...data, approved: false });
}

export async function deleteCategory(categoryId) {
  return await Category.findByIdAndUpdate(categoryId, { isDeleted: true });
}

export async function addProduct(data) {
  return await Product.create(data);
}

export async function removeProduct(itemId) {
  return await Product.findByIdAndUpdate(itemId, { isDeleted: true });
}

export async function updateProduct(itemId, data) {
  return await Product.findByIdAndUpdate(itemId, data, { new: true });
}
