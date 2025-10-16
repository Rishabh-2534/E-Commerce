// admin.repository.js
import User from "../models/user.model.js";
import Seller from "../models/seller.model.js";


export async function deleteUser(userId) {
  return await User.findByIdAndDelete(userId);
}

export async function listUsers() {
  return await User.find();
}
export async function findUser(userId){
  return await User.findById(userId);
}

export async function deactivateUser(userId) {
  return await User.findByIdAndUpdate(userId, { active: false }, { new: true }); 
}
