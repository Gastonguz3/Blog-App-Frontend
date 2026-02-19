import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import type { FormNoteType } from "../../types/FormNoteType";

const FormNote = ({
  title,
  greenAction,
  onSubmit,
  initialData,
}: FormNoteType) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="bg-amber-200 p-3 rounded-tr-lg border border-amber-600">
      <h1 className="text-center mb-3 font-pacifico"> {title}</h1>

      <form onSubmit={handleSubmit}>
        
        <textarea
          className="block w-full mt-4 border resize-none h-60 focus:outline-none p-2"
          placeholder=" ¿En que estas pensando?"
          typeof="text"
          name="description"
          id="description"
          value={data.description}
          onChange={handleChange}
          required
        />

        <div className="flex justify-between">
          <NavLink
            to="/notes"
            className="bg-red-400 rounded-full p-2 mt-4 font-bold cursor-pointer hover:bg-red-600 hover:text-white"
          >
            Regresar
          </NavLink>
          <button className="bg-green-300 rounded-full p-2 mt-4 font-bold cursor-pointer hover:bg-green-500 hover:text-white">
            {greenAction}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNote;
