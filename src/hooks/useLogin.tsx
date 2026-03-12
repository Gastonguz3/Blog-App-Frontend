import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/authService";

export const useLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.ChangeEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("Completa todos los campos", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    try {
      const data = await loginUser({ email, password });

      //guardo el token y user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/notes");
    } catch (error: any) {
      const message = error.response?.data?.message || "Error inesperado";
      toast.error(message, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return {email,password,setEmail,setPassword,handleSubmit};
}

