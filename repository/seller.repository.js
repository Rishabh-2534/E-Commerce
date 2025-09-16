import { CategoryRequestModel } from "../models/categoryRequest.model.js";
import { ProductModel } from "../models/product.model.js";


export async function requestAddCategory(data) {
  return await CategoryRequestModel.create(data);
}


export async function addProduct(data) {
  return await ProductModel.create(data);
}

export async function removeProduct(itemId) {
  return await ProductModel.destroy({ where: { id: itemId } });
}

export async function updateProduct(itemId, data) {
  return await ProductModel.update(data, { where: { id: itemId } });
}
