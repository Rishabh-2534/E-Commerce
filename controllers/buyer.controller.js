import * as buyerService from "../services/buyer.service.js";


export async function listProducts(req, res) {
  const products = await buyerService.listProducts();
  res.json(products);
}


export async function getCart(req, res) {
  const cart = await buyerService.getCart();
  res.json(cart);
}

export async function addToCart(req, res) {
  const { itemId } = req.params;
  const result = await buyerService.addToCart(itemId);
  res.json(result);
}

export async function removeFromCart(req, res) {
  const { itemId } = req.params;
  const result = await buyerService.removeFromCart(itemId);
  res.json(result);
}

export async function emptyCart(req, res) {
  const result = await buyerService.emptyCart();
  res.json(result);
}


export async function getOrders(req, res) {
  const orders = await buyerService.getOrders();
  res.json(orders);
}

export async function placeOrder(req, res) {
  const { itemId } = req.params;
  const result = await buyerService.placeOrder(itemId);
  res.json(result);
}
