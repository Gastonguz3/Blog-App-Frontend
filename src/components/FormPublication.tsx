import { NavLink } from "react-router-dom";

type formProps = {
  title: string
  greenAction: string
}

const FormPublication = ({title, greenAction} : formProps) => {
  return (
    <div className="bg-amber-200 p-3 rounded-tr-lg border border-amber-600">
      <h1 className="text-center mb-3 font-pacifico"> {title}</h1>
      <input
        className="block w-full border h-10"
        placeholder=" ¿Quien sos?"
        type="text"
        name="author"
        id="author"
        required
      />

      <form>
        <textarea
          className="block w-full mt-4 border resize-none h-60"
          placeholder=" ¿En que estas pensando?"
          typeof="text"
          name="description"
          id="description"
          required
        />
      </form>
      <div className="flex justify-between">
        <NavLink to="/" className="bg-red-400 rounded-full p-2 mt-4 font-bold cursor-pointer hover:bg-red-600 hover:text-white">
          Regresar
        </NavLink>
        <button className="bg-green-300 rounded-full p-2 mt-4 font-bold cursor-pointer hover:bg-green-500 hover:text-white">
          {greenAction}
        </button>
      </div>
    </div>
  );
};

export default FormPublication;
