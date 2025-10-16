import * as categoryRepository from "../repository/seller_category.repository.js";
export async function requestAddCategory(data) {
  return await categoryRepository.requestAddCategory(data);
}

export async function createCategory(data) {
  return await categoryRepositoryRepository.createCategory(data);
}

export async function deleteCategory(categoryId) {
  return await categoryRepository.deleteCategory(categoryId);
}