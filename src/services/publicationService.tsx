import axios from "axios";
import type { PublicationType } from "../types/PublicationType";
import type { PublicationDTO } from "../types/PublicationDTO";

const API_URL = "http://localhost:3000/api/publication";

export const getPublicationById = (id: string) =>
  axios.get<PublicationType>(`${API_URL}/${id}`);

export const getAllPublications = () =>
  axios.get<PublicationType[]>(`${API_URL}/`);

export const createPublication = (data: PublicationDTO) =>
  axios.post<PublicationType>(`${API_URL}/`, data);

export const updatePublication = (id: string, data: PublicationDTO) =>
  axios.put<PublicationType>(`${API_URL}/${id}`, data);

export const deletePublication = (id: number) =>
  axios.delete<PublicationType>(`${API_URL}/${id}`);
