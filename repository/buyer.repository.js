import Product  from "../models/product.model.js";
import Cart  from "../models/cart.model.js";
import  Order  from "../models/order.model.js";


export async function listProducts() {
  return await Product.findAll();
}


export async function getCart() {
  return await Cart.findAll();
}

export async function addToCart(itemId) {
  return await Cart.create({ productId: itemId, quantity: 1 });
}

export async function removeFromCart(itemId) {
  return await Cart.destroy({ where: { productId: itemId } });
}

export async function emptyCart() {
  return await Cart.destroy({ where: {} });
}


export async function getOrders() {
  return await Order.findAll();
}

export async function placeOrder(itemId) {
  
  const order = await Order.create({ productId: itemId, status: "PLACED" });
  await Cart.destroy({ where: { productId: itemId } });
  return order;
}
