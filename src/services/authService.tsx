import axios from "axios";
import { API_URL } from "../config/api";

export interface AuthResponse {
    token: string,
    user: {
        _id: string,
        name: string,
        mail:string
    }
} 

const API_URL_AUTH = `${API_URL}/auth`;

export const registerUser = async (data: { name: string; email: string; password: string}) : Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL_AUTH}/register`, data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) : Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL_AUTH}/login`, data);
  return response.data;
  
};

export const verifyUser = async (token: string) => {
  const response = await axios.get(`${API_URL_AUTH}/verify/${token}`);
  return response.data;
}
