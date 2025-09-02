/*
User(User_id,UserName,Password,Role)
Seller(User_id,seller_id,Name,verified,AddressId,account_id)
Buyer(User_id,Name,contact,AddressId)
Admin(User_id,Name)
Product(Product_id,seller_id,category,Price,Brand,verified,Description)
Order(Order_id,Product_id,Quantity,Price,Paid,Received)
Cart(cart_id,User_id)
Cart_items(cart_id,productId,Quanity);
*/
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
    addressId:String,
    accountId:String,
}

const buyerSchema= {
    userId:ObjectId,
    name:String,
    contact:String,
    addressId:String,
}

const adminSchema= {
    userId:ObjectId,
    name:String,
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