import { UserModel } from "../models/user.model.js";
import { ProductModel } from "../models/product.model.js";
import { CategoryModel } from "../models/category.model.js";


export async function listUsers() {
  return await UserModel.findAll();
}

export async function deleteUser(userId) {
  return await UserModel.destroy({ where: { id: userId } });
}

export async function verifyUser(userId) {
  return await UserModel.update({ verified: true }, { where: { id: userId } });
}

export async function deactivateUser(userId) {
  return await UserModel.update({ active: false }, { where: { id: userId } });
}


export async function listProducts() {
  return await ProductModel.findAll();
}

export async function verifyProduct(itemId) {
  return await ProductModel.update({ verified: true }, { where: { id: itemId } });
}


export async function createCategory(data) {
  return await CategoryModel.create(data);
}

export async function deleteCategory(categoryId) {
  return await CategoryModel.destroy({ where: { id: categoryId } });
}
