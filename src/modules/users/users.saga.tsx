import axios from "axios";

const API_URL = process.env.API_URL;

/** Guarda un token de usuario */
export async function saveNewUserToken(token: string) {
  const response = await axios.post(API_URL + '/user', { token });
  return response;
}