// admin.repository.js
import User from "../models/user.model.js";
import Seller from "../models/seller.model.js";
import Buyer from "../models/buyer.model.js";

export async function deleteUser(userId) {
  
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Delete related docs based on role
  if (user.role === "seller") {
    await Seller.findOneAndDelete({ sellerId: userId });
  } else if (user.role === "buyer") {
    await Buyer.findOneAndDelete({ buyerId: userId });
  }

  // Finally delete the user
  return await User.findByIdAndDelete(userId);
}

export async function listUsers() {
  return await User.find();
}

export async function verifyUser(userId) {
   return await Seller.findOneAndUpdate(
    { sellerId: userId },
    { verified: true },        
    { new: true }
   );
}

export async function deactivateUser(userId) {
  return await User.findByIdAndUpdate(userId, { active: false }, { new: true }); 
}
