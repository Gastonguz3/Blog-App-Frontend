import { User, Lock, Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const FormRegister = () => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 p-8 shadow-xl sm:p-12 ls:p-16 flex flex-col justify-center">
      <h2 className="text-5xl font-bold font-pacifico text-center mb-8">
        Crea tu cuenta
      </h2>

      {/*Usuario*/}
      <form className="space-y-5">
        <div className="">
          <label
            htmlFor="text"
            className=" text-md font-medium text-black z-10"
          >
            Usuario
          </label>
          <div className="relative">
            <span className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2">
              <User className="w-6 h-6" />
            </span>
            <input
              type="text"
              id="user"
              className=" w-full border border-black rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
              placeholder="Ingresar Usuario "
              autoComplete="off"
            />
          </div>
        </div>

        {/* contraseña */}
        <div className="relative pt-4">
          <label
            htmlFor="password"
            className=" text-md font-medium text-black"
          >
            Contraseña
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {" "}
              <Lock className="w-5 h-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className=" w-full border border-blacl rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
              placeholder="****** "
              autoComplete="off"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="w-7 h-7"/> : <Eye className="w-7 h-7" />}
            </span>
          </div>
        </div>

        {/* mail */}
        <div className="relative pt-4">
          <label
            htmlFor="email"
            className="text-md font-medium text-black"
          >
            Email
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {" "}
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              id="email"
              className=" w-full border border-black rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
              placeholder="Ingresar correo electronico "
              autoComplete="off"
            />
          </div>
        </div>

        {/*Boton de login */}
        <button className="w-full mt-3 bg-yellow-400 rounded-full py-3 font-semibold hover:bg-amber-500 hover:text-white cursor-pointer transition duration-300  ">
          Registrarse
        </button>

        {/* Link para registrarse */}
        <div className="text-sm text-gray-600 text-center ">
          Ya tenes cuenta?{" "}
          <NavLink to="/" className="text-orange-400 font-semibold hover:underline">Inicia Sesion</NavLink>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
