import * as categoryService from "../services/category.services.js";
export async function requestAddCategory(req, res) {
  try {
    const data = req.body;
    const result = await categoryService.requestAddCategory(data);
    res.success(result, "Category request submitted successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function createCategory(req, res) {
  try {
    const data = req.body;
    const result = await categoryService.createCategory(data);
    res.success(result, "Category created successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function deleteCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const result = await categoryService.deleteCategory(categoryId);
    res.success(result, "Category deleted successfully");
  } catch (err) {
    res.error(err);
  }
}
