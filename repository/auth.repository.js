import { UserModel } from "../models/user.model.js";
import { PendingUpdateModel } from "../models/pendingUpdate.model.js";

// Register
export async function registerUser(data) {
  return await UserModel.create(data);
}

// Login
export async function loginUser({ email, password }) {
  return await UserModel.findOne({ where: { email, password } });
}

// Save pending update
export async function savePendingUpdate(email, data, token) {
  return await PendingUpdateModel.create({ email, data: JSON.stringify(data), token });
}

// Find pending update
export async function findPendingUpdate(token) {
  return await PendingUpdateModel.findOne({ where: { token } });
}

// Delete pending update
export async function deletePendingUpdate(token) {
  return await PendingUpdateModel.destroy({ where: { token } });
}

// Update user
export async function updateUserByEmail(email, data) {
  return await UserModel.update(data, { where: { email } });
}


export async function logoutUser(userId) {
  return await UserModel.update({ sessionActive: false }, { where: { id: userId } });
}
