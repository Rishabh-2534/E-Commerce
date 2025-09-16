import * as adminRepository from "../repository/admin.repository.js";


export async function listUsers() {
  return await adminRepository.listUsers();
}

export async function deleteUser(userId) {
  return await adminRepository.deleteUser(userId);
}

export async function verifyUser(userId) {
  return await adminRepository.verifyUser(userId);
}

export async function deactivateUser(userId) {
  return await adminRepository.deactivateUser(userId);
}

export async function listProducts() {
  return await adminRepository.listProducts();
}

export async function verifyProduct(itemId) {
  return await adminRepository.verifyProduct(itemId);
}


export async function createCategory(data) {
  return await adminRepository.createCategory(data);
}

export async function deleteCategory(categoryId) {
  return await adminRepository.deleteCategory(categoryId);
}
