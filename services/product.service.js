import * as productRepository from "../repository/product.repository.js";
export async function listProducts(user) {
  if(user.role=="admin"){
    return await productRepository.listProducts();
  }else{
    return await productRepository.listSellerProducts(user._id);
  }
}
export async function listVerifiedProducts() {
  return await productRepository.listVerifiedProducts();
}
export async function verifyProduct(itemId) {
  return await productRepository.verifyProduct(itemId);
}

export async function addProduct(data) {
  return await productRepository.addProduct(data);
}

export async function removeProduct(itemId) {
  return await productRepository.removeProduct(itemId);
}

export async function updateProduct(itemId, data) {
  return await productRepository.updateProduct(itemId, data);
}



