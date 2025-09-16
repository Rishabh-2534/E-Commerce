import * as authService from "../services/auth.service.js";

// Register
export async function registerUser(req, res) {
  try {
    const data = req.body;
    const user = await authService.registerUser(data);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Login
export async function loginUser(req, res) {
  try {
    const credentials = req.body;
    const result = await authService.loginUser(credentials);
    res.json({
      message: "Login successful",
      token: result.token,
      user: result.user,
    });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

// Update details (no confirmation, direct update)
export async function updateUserDetails(req, res) {
  try {
    const { userId } = req.user; // from middleware
    const data = req.body;
    const result = await authService.updateUserDetails(userId, data);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Request password change (send confirmation email)
export async function requestPasswordChange(req, res) {
  try {
    const { email, newPassword } = req.body;
    const result = await authService.requestPasswordChange(email, newPassword);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Confirm password change
export async function confirmPasswordChange(req, res) {
  try {
    const { token } = req.params;
    const result = await authService.confirmPasswordChange(token);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Logout
export async function logoutUser(req, res) {
  try {
    const { userId } = req.user; // from middleware
    const result = await authService.logoutUser(userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
