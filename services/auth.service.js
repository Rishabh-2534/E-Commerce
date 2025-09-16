import * as authRepository from "../repository/auth.repository.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// SMTP transport (example: Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// Register

export async function registerUser(data) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  return await authRepository.registerUser({
    ...data,
    password: hashedPassword,
  });
}


// Login 
export async function loginUser(credentials) {
  const user = await authRepository.findUserByEmail(credentials.email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(credentials.password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token, user: { id: user.id, email: user.email, role: user.role } };
}


export async function updateUserDetails(userId, data) {
  await authRepository.updateUserById(userId, data);
  return { message: "User details updated successfully" };
}

// Change password (with SMTP verification)

// auth.service.js
export async function requestPasswordChange(email, newPassword) {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  // Generate a JWT reset token containing email + hashed password
  const token = jwt.sign(
    { email, hashedNewPassword },
    process.env.JWT_SECRET,
    { expiresIn: "15m" } 
  );

  const confirmUrl = `${process.env.APP_URL}/auth/change-password/confirm/${token}`;
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Confirm Password Change",
    html: `<p>Click to confirm password change:</p><a href="${confirmUrl}">${confirmUrl}</a>`,
  });

  return { message: "Confirmation email sent" };
}

export async function confirmPasswordChange(token) {
  try {
    const { email, hashedNewPassword } = jwt.verify(token, process.env.JWT_SECRET);

    await authRepository.updatePasswordByEmail(email, hashedNewPassword);
    return { message: "Password updated successfully" };
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
}

// Logout
export async function logoutUser(userId) {
  return await authRepository.logoutUser(userId);
}
