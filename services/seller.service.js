import * as sellerRepository from "../repository/seller_category.repository.js";
export async function setupSeller(userId,data){
  return await sellerRepository.setupSeller(userId,data);
}
export async function verifySeller(userId) {
  return await sellerRepository.verifySeller(userId);
}



