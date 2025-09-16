import * as authService from "../services/auth.service.js";

// Register
export async function registerUser(req, res) {
  const data = req.body;
  const user = await authService.registerUser(data);
  res.json(user);
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


// Request update (sends email with link)
export async function requestUpdateDetails(req, res) {
  const { user } = req; // from middleware
  const data = req.body;

  const result = await authService.requestUpdateDetails(user.email, data);
  res.json({
    message: "Verification email sent. Please check your inbox.",
    result,
  });
}

// Confirm update (user clicks link)
export async function confirmUpdateDetails(req, res) {
  const { token } = req.params;
  const result = await authService.confirmUpdateDetails(token);
  res.json(result);
}

// Logout
export async function logoutUser(req, res) {
  const { userId } = req.user;
  const result = await authService.logoutUser(userId);
  res.json(result);
}
