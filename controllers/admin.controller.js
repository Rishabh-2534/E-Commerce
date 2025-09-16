import * as adminService from "../services/admin.service.js";

export async function listUsers(req, res) {
  const users = await adminService.listUsers();
  res.json(users);
}

export async function deleteUser(req, res) {
  const { userId } = req.params;
  const result = await adminService.deleteUser(userId);
  res.json(result);
}

export async function verifyUser(req, res) {
  const { userId } = req.params;
  const result = await adminService.verifyUser(userId);
  res.json(result);
}

export async function deactivateUser(req, res) {
  const { userId } = req.params;
  const result = await adminService.deactivateUser(userId);
  res.json(result);
}


export async function listProducts(req, res) {
  const products = await adminService.listProducts();
  res.json(products);
}

export async function verifyProduct(req, res) {
  const { itemId } = req.params;
  const result = await adminService.verifyProduct(itemId);
  res.json(result);
}


export async function createCategory(req, res) {
  const data = req.body;
  const result = await adminService.createCategory(data);
  res.json(result);
}

export async function deleteCategory(req, res) {
  const { categoryId } = req.params;
  const result = await adminService.deleteCategory(categoryId);
  res.json(result);
}
