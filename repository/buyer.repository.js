import { ProductModel } from "../models/product.model.js";
import { CartModel } from "../models/cart.model.js";
import { OrderModel } from "../models/order.model.js";


export async function listProducts() {
  return await ProductModel.findAll();
}


export async function getCart() {
  return await CartModel.findAll();
}

export async function addToCart(itemId) {
  return await CartModel.create({ productId: itemId, quantity: 1 });
}

export async function removeFromCart(itemId) {
  return await CartModel.destroy({ where: { productId: itemId } });
}

export async function emptyCart() {
  return await CartModel.destroy({ where: {} });
}


export async function getOrders() {
  return await OrderModel.findAll();
}

export async function placeOrder(itemId) {
  
  const order = await OrderModel.create({ productId: itemId, status: "PLACED" });
  await CartModel.destroy({ where: { productId: itemId } });
  return order;
}
