import * as authRepository from "../repository/auth.repository.js";

import jwt from "jsonwebtoken";

// Register
export async function registerUser(data) {
  return await authRepository.registerUser(data);
}

// Login
export async function loginUser({ email, password }) {
  const user = await authRepository.loginUser({ email, password });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // token expiry 1 hour
  );

  return { token, user };
}

export async function requestUpdateDetails(email, data) {

 


}

export async function confirmUpdateDetails(token) {
  
}

// Logout
export async function logoutUser(userId) {
  return await authRepository.logoutUser(userId);
}
