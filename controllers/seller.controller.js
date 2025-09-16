import * as sellerService from "../services/seller.service.js";


export async function requestAddCategory(req, res) {
  const data = req.body;
  const result = await sellerService.requestAddCategory(data);
  res.json(result);
}


export async function addProduct(req, res) {
  const data = req.body;
  const result = await sellerService.addProduct(data);
  res.json(result);
}

export async function removeProduct(req, res) {
  const { itemId } = req.params;
  const result = await sellerService.removeProduct(itemId);
  res.json(result);
}

export async function updateProduct(req, res) {
  const { itemId } = req.params;
  const data = req.body;
  const result = await sellerService.updateProduct(itemId, data);
  res.json(result);
}
