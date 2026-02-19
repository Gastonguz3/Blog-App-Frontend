import axios from "axios";
import type { NoteType } from "../types/NoteType";
import type { NoteDTO } from "../types/NoteDTO";

const API_URL = "http://localhost:3000/api/note";

export const getNoteById = (id: string) =>
  axios.get<NoteType>(`${API_URL}/${id}`);

export const getAllNotes = () => axios.get<NoteType[]>(`${API_URL}/`);

export const createNote = (data: NoteDTO) =>
  axios.post<NoteType>(`${API_URL}/`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

export const updateNote = (id: string, data: NoteDTO) =>
  axios.put<NoteType>(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });

export const deleteNote = (id: number) =>
  axios.delete<NoteType>(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
