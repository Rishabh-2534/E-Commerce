import * as buyerRepository from "../repository/buyer_cart.repository.js";


export async function setupBuyer(userId,data){
  return await buyerRepository.setupBuyer(userId,data);
}