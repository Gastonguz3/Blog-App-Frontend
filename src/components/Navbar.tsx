import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-500 px-6 py-4">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="font-bold text-3xl font-pacifico">
          Blog App
        </NavLink>
        <div className="flex gap-4 ">
          <button className="bg-yellow-400 px-2 py-2 rounded-full cursor-pointer hover:bg-amber-500 hover:text-white">
            Ingresar
          </button>
          <button className="bg-yellow-400 px-2 py-2 rounded-full cursor-pointer hover:bg-amber-500 hover:text-white">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
