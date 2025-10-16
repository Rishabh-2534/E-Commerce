import * as userService from "../services/user.service.js";
import * as sellerService from "../services/seller.service.js";
export async function listUsers(req, res) {
  try {
    const users = await userService.listUsers();
    res.success(users, "Users fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function deleteUser(req, res) {
  try {
    const { userId } = req.params;
    const result = await userService.deleteUser(userId);
    res.success(result, "User deleted successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function verifyUser(req, res) {
  res.success("good");
  try {
    const { userId } = req.params;
    const result = await sellerService.verifySeller(userId);
    if(!result){
      res.error({message:"no such seller exist"});
    }
    res.success(result, "User verified successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function deactivateUser(req, res) {
  try {
    const { userId } = req.params;
    const result = await userService.deactivateUser(userId);
    res.success(result, "User deactivated successfully");
  } catch (err) {
    res.error(err);
  }
}
