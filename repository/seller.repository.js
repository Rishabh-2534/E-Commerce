import  Category  from "../models/category.model.js";
import  Product  from "../models/product.model.js";
import Seller from "../models/seller.model.js";
export async function setupSeller(userId,data){
  return await Seller.create({
    sellerId:userId,
    name:data.name,
    address:data.address,
    accountId:data.accountId,
  });
}
export async function updateSeller(userId,data){
  return  await Seller.findOneAndUpdate(
      {sellerId:userId},
      data,
      {new:true},
    );
}
export async function createCategory(data) {
  return await Category.create(data);
} 

export async function requestAddCategory(data) {
  return await Category.create({ ...data, approved: false });
}

export async function deleteCategory(categoryId) {
  return await Category.findByIdAndUpdate(categoryId, { isDeleted: true });
}

export async function addProduct(data) {
  return await Product.create(data);
}

export async function findSeller(userId){
  return await Seller.findById({sellerId:userId});
}

export async function removeProduct(itemId) {
  return await Product.findByIdAndUpdate(itemId, { isDeleted: true });
}

export async function updateProduct(itemId, data) {
  return await Product.findByIdAndUpdate(itemId, data, { new: true });
}
