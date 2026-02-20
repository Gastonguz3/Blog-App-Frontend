import { useNavigate, useParams } from "react-router-dom";
import FormNote from "../components/Form/FormNote";
import { useEffect, useState } from "react";
import { getNoteById, updateNote } from "../services/noteService";
import { toast } from "react-toastify";
import type { NoteDTO } from "../types/NoteDTO";

const UpdateBlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState({
    description: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) {
        console.error("Error al devolver la informacion a actualizar");
        return;
      }
      try {
        const response = await getNoteById(id);

        setInitialData({
          description: response.data.description,
        });
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchNote();
  }, [id]);

  const handlePut = async (note: NoteDTO) => {
    if (!id) throw new Error("El id no fue encontrado");

    try {
      await updateNote(id, note);
      toast.success("Publicacion actualizada con éxito!", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/notes");
    } catch (error: any) {
      const status = error.response?.status;

      switch (status) {
        case 403:
          toast.error("No esta autorizado", {  
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
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-200  py-20">
        <FormNote
          title="ACTUALIZAR NOTA"
          greenAction="Actualizar"
          onSubmit={handlePut}
          initialData={initialData}
        />
      </div>
    </div>
  );
};

export default UpdateBlogPage;
