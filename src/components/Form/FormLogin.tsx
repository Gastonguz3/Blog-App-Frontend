import { Mail, Lock, Eye, EyeOff, Github } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";

const FormLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
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
      toast.error("Error al iniciar sesion!", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex-1 p-8 shadow-xl sm:p-12 ls:p-16 flex flex-col justify-center">
      <h2 className="text-5xl font-bold font-pacifico mb-8 text-center">
        Bienvenido al Blog de Notas!
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* email */}
        <div className="relative pt-4">
          <label
            htmlFor="email"
            className="absolute top-1 left-8 px-1 text-sm font-medium text-gray-500 bg-white z-10"
          >
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {" "}
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              id="email"
              className=" w-full border border-gray-300 rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresar correo electronico "
              autoComplete="off"
            />
          </div>
        </div>

        {/* contraseña */}
        <div className="relative pt-4">
          <label
            htmlFor="password"
            className="absolute top-1 left-8 px-1 text-sm font-medium text-gray-500 bg-white z-10"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {" "}
              <Lock className="w-5 h-5" />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className=" w-full border border-gray-300 rounded-lg px-12 py-3 focus:outline-none  focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="****** "
              autoComplete="off"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-7 h-7" />
              ) : (
                <Eye className="w-7 h-7" />
              )}
            </span>
          </div>
        </div>

        {/*Boton de login */}
        <button
          type="submit"
          className="w-full bg-yellow-400 rounded-full py-3 font-semibold hover:bg-amber-500 hover:text-white cursor-pointer transition duration-300"
        >
          Ingresar
        </button>

        <button
          type="button"
          className="w-full bg-yellow-400 rounded-full py-3 font-semibold hover:bg-amber-500 hover:text-white cursor-pointer transition duration-300"
          onClick={() => navigate("/notes")}
        >
          Ingresar sin iniciar sesion
        </button>

        {/* OR */}
        <div className="flex items-center my-3">
          <div className="grow border-t border-gray-300 "> </div>
          <span className="shrink mx-4 text-gray-500 text-md ">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Links para github */}

        <a
          href="https://github.com/Gastonguz3/Blog-App-Frontend"
          target="_blank"
          className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-400 hover:text-black cursor-pointer transition duration-300 flex justify-center"
        >
          <Github className="mx-3" />
          <span>Ver codigo Frontend en Github</span>
        </a>

        <a
          href="https://github.com/Gastonguz3/Blog-App-Backend"
          target="_blank"
          className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-400 hover:text-black cursor-pointer transition duration-300 flex justify-center"
        >
          <Github className="mx-3" />
          <span>Ver codigo Backend en Github</span>
        </a>

        {/* Link para registrarse */}
        <div className="text-sm text-gray-600 text-center ">
          No tenes cuenta?{" "}
          <NavLink
            to="/register"
            className="text-orange-400 font-semibold hover:underline"
          >
            Registrate
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
