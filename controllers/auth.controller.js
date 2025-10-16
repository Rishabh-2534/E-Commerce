import * as authService from "../services/auth.service.js";

// Register
export async function registerUser(req, res) {
  try {
    const data = req.body;
    const user = await authService.registerUser(data);
    res.success(user, "User registered successfully");
  } catch (err) {
    res.error(err, 400);
  }
}

// Login
export async function loginUser(req, res) {
  try {
    const credentials = req.body;
    const result = await authService.loginUser(credentials);
    res.success(
      { token: result.token, user: result.user },
      "Login successful"
    );
  } catch (err) {
    res.error(err, 401);
  }
}

// Update details (direct update, no confirmation)
export async function updateUserDetails(req, res) {
  try {
    const { _id } = req.user; // from middleware
    const data = req.body;
    const result = await authService.updateUserDetails(_id, data);
    res.success(result, "User details updated successfully");
  } catch (err) {
    res.error(err, 400);
  }
}

// Request password change (send confirmation email)
export async function requestPasswordChange(req, res) {
  try {
    const { email, newPassword } = req.body;
    const result = await authService.requestPasswordChange(email, newPassword);
    res.success(result, "Password change confirmation email sent");
  } catch (err) {
    res.error(err, 400);
  }
}

// Confirm password change
export async function confirmPasswordChange(req, res) {
  try {
    const { token } = req.params;
    const result = await authService.confirmPasswordChange(token);
    res.success(result, "Password updated successfully");
  } catch (err) {
    res.error(err, 400);
  }
}

// Logout
export async function logoutUser(req, res) {
  try {
    const { userId } = req.user; // from middleware
    const result = await authService.logoutUser(userId);
    res.success(result, "Logged out successfully");
  } catch (err) {
    res.error(err, 400);
  }
}
