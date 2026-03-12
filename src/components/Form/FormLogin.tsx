import { Mail, Lock } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import InputField from "../ui/InputField";
import PasswordField from "../ui/PasswordField";
import PrimaryButton from "../ui/PrimaryButton";
import LinkGithubButton from "../ui/LinkGithubButton";

const FormLogin = () => {
  const navigate = useNavigate();

  const { email, password, setEmail, setPassword, handleSubmit } = useLogin();

  return (
    <div className="flex-1 p-8 shadow-xl sm:p-12 ls:p-16 flex flex-col justify-center">
      <h2 className="text-5xl font-bold font-pacifico mb-8 text-center">
        Bienvenido al Blog de Notas!
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* email */}
        <InputField
          id={"email"}
          label={"Email Address"}
          icon={<Mail className="w-5 h-5" />}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"Ingresar correo electronico"}
        />

        {/* contraseña */}
        <PasswordField
          id={"password"}
          label={"Password"}
          icon={<Lock className="w-5 h-5" />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={"******"}
        />

        {/*Boton de login */}
        <PrimaryButton type={"submit"}>Ingresar</PrimaryButton>

        <PrimaryButton onClick={() => navigate("/notes")}>
          Ingresar sin iniciar sesion
        </PrimaryButton>

        {/* OR */}
        <div className="flex items-center my-3">
          <div className="grow border-t border-gray-300 "> </div>
          <span className="shrink mx-4 text-gray-500 text-md ">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Links para github */}

        <LinkGithubButton href={"https://github.com/Gastonguz3/Blog-App-Frontend"}>
          Ver codigo Frontend en Github
        </LinkGithubButton>

        <LinkGithubButton href={"https://github.com/Gastonguz3/Blog-App-Backend"}>
          Ver codigo Backend en Github
        </LinkGithubButton>

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
