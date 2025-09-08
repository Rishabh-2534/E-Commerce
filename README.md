/*
User(User_id,UserName,Password,Role)
Seller(User_id,seller_id,Name,verified,AddressId,account_id)
Buyer(User_id,Name,contact,AddressId)
Product(Product_id,seller_id,category,Price,Brand,verified,Description)
Order(Order_id,Product_id,Quantity,Price,Paid,Received)
Cart(cart_id,User_id)
Cart_items(cart_id,productId,Quanity);
Address(street, city, state , country, zip code)
Account(accNo,bankName,ifscCode,accType)
*/
const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    userId:String,
    userName:String,
    password:String,
    role:String,
});
const User =mongoose.Model("User",userSchema);
export default User;
const UserSchema= {
    userId:String,
    userName:String,
    password:String,
    role:String,
}
const SellerSchema= {
    userId: ObjectId,
    sellerId: String,
    name:String,
    verified:Boolean,
    addressId:ObjectId,
    accountId:ObjectId,
}
const buyerSchema= {
    userId:ObjectId,
    name:String,
    contact:String,
    addressId:ObjectId,
}
const ProductSchema= {
    sellerId: ObjectId,
    category: String,
    price:Number,
    brand:String,
    verified:Boolean,
    description:String,
}
const OrderSchema ={
    productId:ObjectId,
    quantity:Number,
    price:Number,
    paid:Boolean,
    received:Boolean,
}
const cartSchema={
    UserId:ObjectId,
}
const cartItemSchema={
    cartId:ObjectId,
    productId:ObjectId,
    quantity:Number,
}
const addressSchema = {   
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,    
};
const accountSchema = {       
    accountNumber: String,  
    bankName: String,
    ifscCode: String,      
    accountType: String,
};
