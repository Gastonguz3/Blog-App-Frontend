import axios from "axios"

const API_URL = "http://localhost:3000/user"

export const updateUser = (id: string, data: {newName: string}) => axios.put(`${API_URL}/${id}`, data, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})

export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})