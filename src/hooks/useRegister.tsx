import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { registerUser } from "../services/authService"

export const useRegister = () => {

    const navigate = useNavigate()
    
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.ChangeEvent) => {
        e.preventDefault()
  
        if (!email || !password || !name) {
          toast.warning("Completa todos los campos", {
            position: "top-center",
            autoClose: 3000,
            theme: "colored",
          });
          return;
        }
  
        try {
          
          await registerUser({name, password, email})
  
          toast.success(`Email de verificacion simulado para ${email}`, {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          });
  
          navigate("/");
          
        } catch (error:any) {
          const message = error.response?.data?.message || "Error inesperado";
          toast.error(message, {
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          });
        }
    }

    return {name, email, password, setName, setEmail, setPassword,handleSubmit};
}

