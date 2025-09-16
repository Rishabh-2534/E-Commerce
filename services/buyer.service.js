import * as buyerRepository from "../repositories/buyer.repository.js";

// Products
export async function listProducts() {
  return await buyerRepository.listProducts();
}

// Cart
export async function getCart() {
  return await buyerRepository.getCart();
}

export async function addToCart(itemId) {
  return await buyerRepository.addToCart(itemId);
}

export async function removeFromCart(itemId) {
  return await buyerRepository.removeFromCart(itemId);
}

export async function emptyCart() {
  return await buyerRepository.emptyCart();
}

// Orders
export async function getOrders() {
  return await buyerRepository.getOrders();
}

export async function placeOrder(itemId) {
  return await buyerRepository.placeOrder(itemId);
}
