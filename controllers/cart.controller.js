import * as cartService from "../services/cart.service.js";


export async function getCart(req, res) {
  try {
    const cart = await cartService.getCart(req.user._id);
    res.success(cart, "Cart fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function addToCart(req, res) {
  try {
    const { itemId } = req.params;
    const result = await cartService.addToCart(req.user._id,itemId);
    res.success(result, "Item added to cart successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function removeFromCart(req, res) {
  try {
    const { itemId } = req.params;
    const result = await cartService.removeFromCart(req.user._id,itemId);
    res.success(result, "Item removed from cart successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function emptyCart(req, res) {
  try {
    const result = await cartService.emptyCart(req.user._id);
    res.success(result, "Cart emptied successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await cartService.getOrders(req.user._id);
    res.success(orders, "Orders fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function placeOrder(req, res) {
  try {
    
    const result = await cartService.placeOrder(req.user._id);
    res.success(result, "Order placed successfully");
  } catch (err) {
    res.error(err);
  }
}
