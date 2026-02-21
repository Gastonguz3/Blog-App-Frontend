import axios from "axios";

export interface AuthResponse {
    token: string,
    user: {
        _id: string,
        name: string,
        mail:string
    }
} 

const API_URL = "http://localhost:3000/auth";

export const registerUser = async (data: { name: string; email: string; password: string}) : Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) : Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
  
};

export const verifyUser = async (token: string) => {
  const response = await axios.get(`${API_URL}/verify/${token}`);
  return response.data;
}
