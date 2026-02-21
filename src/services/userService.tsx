import axios from "axios"
import { API_URL } from "../config/api"

const API_URL_USER = `${API_URL}/user`

export const updateUser = (data: {newName: string}) => axios.put(`${API_URL_USER}/me`, data, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export const deleteUser = () => axios.delete(`${API_URL_USER}/me`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})