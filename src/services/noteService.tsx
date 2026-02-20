import axios from "axios";
import type { NoteProps } from "../types/NoteProps";
import type { NoteDTO } from "../types/NoteDTO";

const API_URL = "http://localhost:3000/api/note";

export const getNoteById = (id: string) =>
  axios.get<NoteProps>(`${API_URL}/${id}`);

export const getAllNotes = () => axios.get<NoteProps[]>(`${API_URL}/`);

export const createNote = (data: NoteDTO) =>
  axios.post<NoteProps>(`${API_URL}/`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const updateNote = (id: string, data: NoteDTO) =>
  axios.put<NoteProps>(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const deleteNote = (id: string) =>
  axios.delete<NoteProps>(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
