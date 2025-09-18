import * as userService from "../services/user.service.js";
import * as productService from "../services/product.service.js";
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
    const result = await userService.verifyUser(userId);
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

export async function listProducts(req, res) {
  try {
    const products = await productService.listProducts();
    res.success(products, "Products fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function verifyProduct(req, res) {
  try {
    const { productId } = req.params;
    const result = await productService.verifyProduct(productId);
    res.success(result, "Product verified successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function createCategory(req, res) {
  try {
    const data = req.body;
    const result = await productService.createCategory(data);
    res.success(result, "Category created successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function deleteCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const result = await productService.deleteCategory(categoryId);
    res.success(result, "Category deleted successfully");
  } catch (err) {
    res.error(err);
  }
}
