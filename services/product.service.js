import * as productRepository from "../repository/product.repository.js";
export async function listProducts() {
  return await productRepository.listProducts();
}

export async function verifyProduct(itemId) {
  return await productRepository.verifyProduct(itemId);
}


export async function createCategory(data) {
  return await productRepository.createCategory(data);
}

export async function deleteCategory(categoryId) {
  return await productRepository.deleteCategory(categoryId);
}
