import Account from "../models/account.model.js";
import User from "../models/user.model.js";

// Create a user
export async function registerUser(data) {
  return await User.create(data);
}
//delete user
export async function deleteUserById(_id) {
  return await User.findByIdAndDelete(_id);
}

// Create an account
export async function createAccount(data) {
  return await Account.create(data);
}
//delete account from within registration
export async function deleteAccountById(_id){
 return await Account.findByIdAndDelete(_id);
}

// Find user by email
export async function findUserByEmail(email) {
  return await User.findOne({ email });
}

// Find user by id
export async function findUserById(userId) {
  return await User.findById(userId);
}
export async function updateUserById(userId, data) {
  const updatedUser=await User.findOneAndUpdate(
    { _id: userId },
    data,
    { new: true }
  );
}

// Update user by email
export async function updateUserByEmail(email, data) {
  return await User.findOneAndUpdate({ email }, data, { new: true });
}

// Update password by email
export async function updatePasswordByEmail(email, hashedPassword) {
  return await User.findOneAndUpdate(
    { email },
    { password: hashedPassword },
    { new: true }
  );
}

// Update password by user id
export async function updatePassword(userId, hashedPassword) {
  return await User.findByIdAndUpdate(
    userId,
    { password: hashedPassword },
    { new: true }
  );
}


export async function setIsLoggedIn(userId,val) {
  
  return await User.findOneAndUpdate(userId,{isLoggedIn:val},{new:true});
}
