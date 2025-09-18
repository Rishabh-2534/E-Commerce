import * as userRepository from "../repository/user.repository.js";


export async function listUsers() {
  return await userRepository.listUsers();
}

export async function deleteUser(userId) {
  return await userRepository.deleteUser(userId);
}

export async function verifyUser(userId) {
  return await userRepository.verifyUser(userId);
}

export async function deactivateUser(userId) {
  return await userRepository.deactivateUser(userId);
}