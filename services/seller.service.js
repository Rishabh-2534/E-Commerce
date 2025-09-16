import * as sellerRepository from "../repositories/seller.repository.js";

export async function requestAddCategory(data) {
  return await sellerRepository.requestAddCategory(data);
}


export async function addProduct(data) {
  return await sellerRepository.addProduct(data);
}

export async function removeProduct(itemId) {
  return await sellerRepository.removeProduct(itemId);
}

export async function updateProduct(itemId, data) {
  return await sellerRepository.updateProduct(itemId, data);
}
