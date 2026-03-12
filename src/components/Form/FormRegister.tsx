import { User, Lock, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import PrimaryButton from "../ui/PrimaryButton";
import InputField from "../ui/InputField";
import PasswordField from "../ui/PasswordField";

const FormRegister = () => {

  const {name,email,password,setName,setEmail,setPassword,handleSubmit} = useRegister();

  return (
    <div className="flex-1 p-8 shadow-xl sm:p-12 ls:p-16 flex flex-col justify-center">
      <h2 className="text-5xl font-bold font-pacifico text-center mb-8">
        Crea tu cuenta
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <InputField
          id={"text"}
          label={"Usuario"}
          icon={<User className="w-6 h-6" />}
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Ingresar Nombre de Usuario"}
        />

        <PasswordField
          id="password"
          label="Contraseña"
          icon={<Lock className="w-5 h-5" />} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"******"}    
        />
        

        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-5 h-5" />}
          placeholder="Ingresar correo electronico"
        />

        <PrimaryButton type="submit">Registrarse</PrimaryButton>

        {/* Link para registrarse */}
        <div className="text-sm text-gray-600 text-center ">
          Ya tenes cuenta?{" "}
          <NavLink
            to="/"
            className="text-orange-400 font-semibold hover:underline"
          >
            Inicia Sesion
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
