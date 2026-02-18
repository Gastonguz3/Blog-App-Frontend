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
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al registrarse");
  }
};

export const loginUser = async (data: { email: string; password: string }) : Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error al iniciar sesión");
  }
};
