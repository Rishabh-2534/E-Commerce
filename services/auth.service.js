import * as authRepository from "../repository/auth.repository.js";
import * as utils from "../utils.js";
import * as sellerService from "./seller.service.js";
import * as buyerService from "./buyers.service.js";
import * as sellerRepository from "../repository/seller_category.repository.js";



// Register
export async function registerUser(data) {
  const hashedPassword = utils.hash(data.password, process.env.SALT);
  let user=null;
  let account= null;
  // create common user in DB
  try{
    user = await authRepository.registerUser({
      ...data,
      password: hashedPassword,
    });
    //validation using js middleware
    if (data.role === "seller") {
      account = await authRepository.createAccount({
        accountNumber: data.accountNumber || `ACCT-${Date.now()}`,
        bankName: data.bankName,
        ifscCode: data.ifscCode,
        accountType: data.accountType,
      });
      await sellerService.setupSeller(user._id, {...data,accountId:account._id});

    } else if (data.role === "buyer") {
      await buyerService.setupBuyer(user._id, data);
    } 

    return user;
  }catch(error){
        if (user) {
        await authRepository.deleteUserById(user._id);
      }
      if (account) {
        await authRepository.deleteAccountById(account._id);
      }
      throw error; 
  }
}


// Login 
export async function loginUser(credentials) {
  const user = await authRepository.findUserByEmail(credentials.email);
  if (!user) throw new Error("User not found");

  const isMatch = utils.hashCompare(credentials.password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  // Generate JWT token
  const token = utils.createJwtToken(
    { _id: user._id.toString(), email: user.email, role: user.role },
    process.env.LOGIN_TOKEN_EXPIRES_IN
  );
  await authRepository.setIsLoggedIn(user._id,true);
  return { token, user: { _id: user._id, email: user.email, role: user.role } };
}


export async function updateUserDetails(userId, data) {
  const user= authRepository.findUserById(userId);
  await authRepository.updateUserById(userId, data);
  if(user.role=="seller") await sellerRepository.updateSeller(userId,data);
  else if(user.role=="buyer") await buyerRepository.updateBuyer(userId,data);
  return { message: "User details updated successfully" };
}

// Change password (with SMTP verification)

// auth.service.js
export async function requestPasswordChange(email, newPassword) {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw new Error("User not found");
  const hashedNewPassword = utils.hash(newPassword,process.env.SALT);

  // Generate a JWT reset token containing email + hashed password
  const token = utils.createJwtToken({ email, hashedNewPassword },process.env.PASSWORD_CHANGE_TOKEN_EXPIRE_IN );
  
  const confirmUrl = `${process.env.APP_URL}/auth/users/change-password/confirm/${token}`;
  await utils.sendEmail (process.env.SMTP_USER,email,"Confirm Password Change",`<p>Click to confirm password change:</p><a href="${confirmUrl}">${confirmUrl}</a>`);
  return { message: "Confirmation email sent" };
}

export async function confirmPasswordChange(token) {
  try { 
    const { email, hashedNewPassword } = utils.verifyJwtToken(token, process.env.JWT_SECRET);
    await authRepository.updatePasswordByEmail(email, hashedNewPassword);
    return { message: "Password updated successfully" };
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
}

// Logout
export async function logoutUser(userId) {
  return await authRepository.setIsLoggedIn(userId,false);
}
