import * as productServices from "../services/product.service.js";
export async function listProducts(req,res){
   try{
    const user= req.user;
    const products= await productServices.listProducts(user);
    res.success(products,"these are products for you");
   }catch(err){
    res.error(err);
   }
}


export async function listVerifiedProducts(req, res) {
  try {
    const products = await productServices.listVerifiedProducts();
    res.success(products, "Products fetched successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function addProduct(req, res) {
  try {
    const data = req.body;
    console.log(req.user._id);
    const result = await productServices.addProduct({...data,userId:req.user._id});
    res.success(result, "Product added successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function removeProduct(req, res) {
  try {
    const { itemId } = req.params;
    const result = await productServices.removeProduct(itemId);
    res.success(result, "Product removed successfully");
  } catch (err) {
    res.error(err);
  }
}

export async function updateProduct(req, res) {
  try {
    const { itemId } = req.params;
    const data = req.body;
    const result = await productServices.updateProduct(itemId, data);
    res.success(result, "Product updated successfully");
  } catch (err) {
    res.error(err);
  }
}


export async function verifyProduct(req, res) {
  try {
    const { productId } = req.params;
    const result = await productServices.verifyProduct(productId);
    res.success(result, "Product verified successfully");
  } catch (err) {
    res.error(err);
  }
}
