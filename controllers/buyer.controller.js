import * as buyerService from "../services/buyer.service.js";

export async function listProducts(req, res) {
  try {
    const products = await buyerService.listProducts();
    res.success(products, "Products fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function getCart(req, res) {
  try {
    const cart = await buyerService.getCart(req.user._id);
    res.success(cart, "Cart fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function addToCart(req, res) {
  try {
    const { itemId } = req.params;
    const result = await buyerService.addToCart(req.user._id,itemId);
    res.success(result, "Item added to cart successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function removeFromCart(req, res) {
  try {
    const { itemId } = req.params;
    const result = await buyerService.removeFromCart(req.user._id,itemId);
    res.success(result, "Item removed from cart successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function emptyCart(req, res) {
  try {
    const result = await buyerService.emptyCart(req.user._id);
    res.success(result, "Cart emptied successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await buyerService.getOrders(req.user._id);
    res.success(orders, "Orders fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function placeOrder(req, res) {
  try {
    
    const result = await buyerService.placeOrder(req.user._id);
    res.success(result, "Order placed successfully");
  } catch (err) {
    res.error(err);
  }
}
