import  User from "../models/user.model.js";
import  Product  from "../models/product.model.js";
import Category  from "../models/category.model.js";


export async function listUsers() {
  return await User.findAll();
}

export async function deleteUser(userId) {
  return await User.destroy({ where: { id: userId } });
}

export async function verifyUser(userId) {
  return await User.update({ verified: true }, { where: { id: userId } });
}

export async function deactivateUser(userId) {
  return await User.update({ active: false }, { where: { id: userId } });
}


export async function listProducts() {
  return await Product.findAll();
}

export async function verifyProduct(itemId) {
  return await Product.update({ verified: true }, { where: { id: itemId } });
}


export async function createCategory(data) {
  return await Category.create(data);
}

export async function deleteCategory(categoryId) {
  return await Category.destroy({ where: { id: categoryId } });
}
