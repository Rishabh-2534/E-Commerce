import * as sellerService from "../services/seller.service.js";

export async function requestAddCategory(req, res) {
  try {
    const data = req.body;
    const result = await sellerService.requestAddCategory(data);
    res.success(result, "Category request submitted successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function addProduct(req, res) {
  try {
    const data = req.body;
    const result = await sellerService.addProduct(data);
    res.success(result, "Product added successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function removeProduct(req, res) {
  try {
    const { itemId } = req.params;
    const result = await sellerService.removeProduct(itemId);
    res.success(result, "Product removed successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function updateProduct(req, res) {
  try {
    const { itemId } = req.params;
    const data = req.body;
    const result = await sellerService.updateProduct(itemId, data);
    res.success(result, "Product updated successfully");
  } catch (err) {
    res.error(err);
  }
}
