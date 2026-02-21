import axios from "axios";
import type { NoteProps } from "../types/NoteProps";
import type { NoteDTO } from "../types/NoteDTO";
import { API_URL } from "../config/api";

const API_URL_NOTE = `${API_URL}/api/note`;

export const getNoteById = (id: string) =>
  axios.get<NoteProps>(`${API_URL_NOTE}/${id}`);

export const getAllNotes = () => axios.get<NoteProps[]>(`${API_URL_NOTE}/`);

export const createNote = (data: NoteDTO) =>
  axios.post<NoteProps>(`${API_URL_NOTE}/`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const updateNote = (id: string, data: NoteDTO) =>
  axios.put<NoteProps>(`${API_URL_NOTE}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const deleteNote = (id: string) =>
  axios.delete<NoteProps>(`${API_URL_NOTE}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
