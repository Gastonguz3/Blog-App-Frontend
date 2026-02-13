import axios from "axios";
import { type PublicationType } from "../types/PublicationType";

const API_URL = "http://localhost:3000";

export const getPublicationById = (id: number) =>
  axios.get<PublicationType>(`${API_URL}/${id}`);

export const getAllPublications = () =>
  axios.get<PublicationType[]>(`${API_URL}/`);

export const createPublication = (data: PublicationType) =>
  axios.post<PublicationType>(`${API_URL}/`, data);

export const updatePublication = (id: number, data: PublicationType) =>
  axios.put<PublicationType>(`${API_URL}/${id}`, data);

export const deletePublication = (id: number) =>
  axios.delete<PublicationType>(`${API_URL}/${id}`);
