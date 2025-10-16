import * as userRepository from "../repository/user.repository.js";
import * as sellerRepository from "../repository/seller_category.repository.js";
import * as buyerRepository from "../repository/buyer_cart.repository.js";
export async function listUsers() {
  return await userRepository.listUsers();
}

export async function deleteUser(userId) {
  try{
    const user= await userRepository.findUser(userId);
    
    if(user.role=="seller") await sellerRepository.deleteSeller(userId);
    else if(user.role=="buyer") await buyerRepository.deleteBuyer(userId);
    
  }catch(err){
    throw new Error(err);
  }
  return await userRepository.deleteUser(userId);
}



export async function deactivateUser(userId) {
  return await userRepository.deactivateUser(userId);
}