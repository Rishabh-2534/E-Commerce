import Product from "../models/product.model.js";
import Cart from "../models/cart.model.js";
import Order from "../models/order.model.js";
import Buyer from "../models/buyer.model.js";

// Setup Buyer
export async function setupBuyer(userId, data) {
  return await Buyer.create({
    buyerId: userId,
    name: data.name,
    contact: data.contact,
    address: data.address,
  });
}
export async function updateBuyer(userId,data){
  await Buyer.findOneAndUpdate(
      {buyerId:userId},
      data,
      {new:true}
    );
}
// PRODUCTS
export async function listProducts() {
  return await Product.find({verified:true});
}

// CART
export async function getCart(userId) {
  return await Cart.find({ buyerId: userId });
}

export async function addToCart(userId, itemId) {
    return await Cart.findOneAndUpdate(
    { buyerId: userId },
    {
      $push: { products: { productId: itemId, quantity: 1 } },
    },
    { new: true, upsert: true } // creates cart if not exists
  );

}

export async function removeFromCart(userId, itemId) {
  return await Cart.findOneAndUpdate(
    { buyerId: userId},
    {$pull:{products:{productId:itemId}}},
    {new:true}
  );
}

export async function emptyCart(userId) {
  return await Cart.findOneAndUpdate(
    { buyerId: userId },
    {$set:{products:[]}},
    {new:true}
  );
}

// ORDERS
export async function getOrders(userId) {
  return await Order.find({ buyerId: userId });
}


export async function placeOrder(userId) {
  // Get all products in the user's cart
  const cart = await Cart.findOne({ buyerId: userId }).populate("products.productId");

  if (!cart || cart.products.length === 0) {
    throw new Error("Cart is empty");
  }

  // Prepare products array for order and calculate total price
  let totalPrice = 0;
  const productsForOrder = cart.products.map(item => {
    const price = item.productId.price || 0;
    totalPrice += price * item.quantity;
    return {
      productId: item.productId._id,
      quantity: item.quantity,
      isDeleted: false,
    };
  });

  // Create the order
  const order = await Order.create({
    buyerId: userId,
    products: productsForOrder,
    paid: false,
    delivered: false,
    totalPrice,
  });

  // Empty the user's cart
  await Cart.findOneAndUpdate(
    { buyerId: userId },
    { $set: { products: [] } },
    { new: true }
  );

  return order;
}
