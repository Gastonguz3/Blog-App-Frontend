import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 p-8 shadow-xl sm:p-12 ls:p-16 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Bienvenido al Blog de Notas
      </h2>
      <form className="space-y-5">
        {/* mail */}
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
              placeholder="****** "
              autoComplete="off"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="w-7 h-7"/> : <Eye className="w-7 h-7" />}
            </span>
          </div>
        </div>

        {/*contraseña olvidada*/}
        <div className="">Forgot Password?</div>
      </form>
    </div>
  );
};

export default FormLogin;
