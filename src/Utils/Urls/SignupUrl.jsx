import { baseUrl } from "../Network/Network";

export const signupUrl = baseUrl + "users/create-user";

export const getAllUser = baseUrl + "users/";

export const getUserById = (id) => baseUrl + `users/id/${id}`;
