import axios from "axios"

const API_URL = "http://localhost:3000/user"

export const updateUser = (data: {newName: string}) => axios.put(`${API_URL}/me`, data, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export const deleteUser = () => axios.delete(`${API_URL}/me`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})