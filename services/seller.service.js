import * as sellerRepository from "../repository/seller.repository.js";

export async function setupSeller(userId,data){
  return await sellerRepository.setupSeller(userId,data);
}

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
