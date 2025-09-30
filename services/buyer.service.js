import * as buyerRepository from "../repository/buyer.repository.js";

export async function setupBuyer(userId,data){
  return await buyerRepository.setupBuyer(userId,data);
}
export async function getCart(userId) {
  return await buyerRepository.getCart(userId);
}

export async function addToCart(userId,itemId) {
  return await buyerRepository.addToCart(userId,itemId);
}

export async function removeFromCart(userId,itemId) {
  return await buyerRepository.removeFromCart(userId,itemId);
}

export async function emptyCart(userId) {
  return await buyerRepository.emptyCart(userId);
}

export async function getOrders(userId) {
  return await buyerRepository.getOrders(userId);
}

export async function placeOrder(userId) {
  return await buyerRepository.placeOrder(userId);
}
