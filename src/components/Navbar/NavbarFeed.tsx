//import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import type { DecodedToken } from "../../types/DecodedTokenType";
import { User } from "lucide-react";
import { updateUser } from "../../services/userService";
import { toast } from "react-toastify";

const NavbarFeed = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user)
      setUsername(parsedUser.name);
    }
  }, []);

  const handleUpdateName = async () => {
  
    try {
      const user = localStorage.getItem("user");
      if(!user) return
      const parsedUser = JSON.parse(user)
      await updateUser(parsedUser._id, {newName})
      //actualizar localStorage
      const newNameLocalStorage = {...parsedUser, name: newName} 
      localStorage.setItem("user", JSON.stringify(newNameLocalStorage))

     toast.success("Nombre cambiado con éxito!", {
              position: "bottom-left",
              autoClose: 3000,
              theme: "colored",
     });
     setUsername(newName)
     setShowEditModal(false)
    } catch (error:any) {
      const status = error.response?.status;

      switch (status) {
        case 403:
          toast.error("No esta autorizado", { //no autorizado
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          });
          break;
        case 404:
          toast.error("Nota no encontrada", {
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          });
          break;
        default:  //500
          toast.error("Error del servidor", {
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          });
          break;
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-purple-500 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl font-pacifico">Blog App</h2>
        <h2 className="font-semibold text-3xl font-pacifico mr-20">
          Bienvenido {username}
        </h2>
        <div className="relative">
          {/*Boton de User */}
          <User
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white rounded-full w-9 h-9 cursor-pointer"
          />
          {/* Barra desplegable */}
          {isOpen && (
            <div className="absolute bg-white right-0 mt-2 w-48 rounded-xl shadow-lg border border-gray-200 z-50">
              <button
                onClick={() => {
                  setShowEditModal(true);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-400 cursor-pointer"
              >
                Cambiar Nombre
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-400 cursor-pointer">
                Cambiar Contraseña
              </button>
              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-red-400 cursor-pointer"
              >
                Eliminar Cuenta
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-400 cursor-pointer"
              >
                Cerrar Sesion
              </button>
            </div>
          )}
          {/* Modal para Editar Nombre */}
          {showEditModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-96 shadow-xl ">
                <h3>Cambiar nombre</h3>
                <input
                  type="text"
                  placeholder="Nuevo nombre"
                  value={username}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:border-purple-500"
                />
                <div className="flex justify-end gap-3 ">
                <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer">
                  Cancelar
                </button>
                <button onClick={handleUpdateName} className="px-4 py-2 bg-purple-500 text-white rounded-lg cursor-pointer">
                  Guardar
                </button>
              </div>
              </div>
            </div>
          )}
          {/* Modal para Borrar Usuario */}
          {showDeleteModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 w-120 shadow-xl">
                  <h3 className="text-xl font-bold text-red-600 mb-2 text-center">Estas seguro que queres borrar la cuenta?</h3>
                  <p className="text-gray-600 mb-4">Esta acción eliminará tu cuenta permanentemente.</p>
                  <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg cursor-pointer" onClick={() => setShowDeleteModal(false)}>
                      Cancelar
                    </button>

                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer" onClick={() => {setShowDeleteModal(false)}}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            )
          }
          
        </div>
      </div>
    </nav>
  );
};

export default NavbarFeed;
