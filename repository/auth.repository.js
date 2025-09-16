import User  from "../models/user.model.js";

export async function registerUser(data) {
  return await User.create(data);
}

export async function findUserByEmail(email) {
  return await User.findOne({ where: { email } });
}

export async function findUserById(userId) {
  return await User.findOne({ where: { id: userId } });
}

export async function updateUserByEmail(email, data) {
  return await User.update(data, { where: { email } });
}

export async function updatePasswordByEmail(email, hashedPassword) {
  return await User.update(
    { password: hashedPassword },
    { where: { email } }
  );
}

export async function updatePassword(userId, hashedPassword) {
  return await User.update(
    { password: hashedPassword },
    { where: { id: userId } }
  );
}

export async function logoutUser(userId) {
  return await User.update(
    { sessionActive: false },
    { where: { id: userId } }
  );
}
