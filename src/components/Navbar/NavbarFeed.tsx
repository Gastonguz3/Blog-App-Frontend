import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface DecodedToken {
    id: string;
    name: string;
    email: string;
    exp: number;
}

const NavbarFeed = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("")
  
  useEffect(()=>{
    const token = localStorage.getItem("token")

    if(token){
        const decoded : DecodedToken= jwtDecode(token)
        setUsername(decoded.name)
    }
  },[])

  const handleLogout = () =>{
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <nav className="bg-purple-500 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl font-pacifico">Blog App</h2>
        <h2 className="font-semibold text-3xl font-pacifico">Bienvenido {username}</h2>
        <button
          className="bg-red-500 px-2 py-2 cursor-pointer hover:bg-amber-500 hover:text-white transition duration-300"
          onClick={handleLogout}
        >
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
};

export default NavbarFeed;
