import  Category  from "../models/category.model.js";
import Seller from "../models/seller.model.js";

export async function findSeller(userId){
  return await Seller.findById({sellerId:userId});
}

export async function setupSeller(userId,data){
  return await Seller.create({
    sellerId:userId,
    name:data.name,
    address:data.address,
    accountId:data.accountId,
  });
}
export async function verifySeller(userId) {
   return await Seller.findOneAndUpdate(
    { sellerId: userId },
    { verified: true },        
    { new: true }
   );
}
export async function updateSeller(userId,data){
  return  await Seller.findOneAndUpdate(
      {sellerId:userId},
      data,
      {new:true},
    );
}
export async function deleteSeller(userId){
  return await Seller.findOneAndDelete({sellerId:userId});
}

export async function requestAddCategory(data) {
  return await Category.create({ ...data, approved: false });
}

export async function deleteCategory(categoryId) {
  return await Category.findByIdAndUpdate(categoryId, { isDeleted: true });
}

export async function createCategory(data) {
  return await Category.create(data); 
}


