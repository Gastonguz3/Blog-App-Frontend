import { useNavigate } from "react-router-dom";
import FormNote from "../components/FormNote";
import { createNote } from "../services/noteService";
import { toast } from "react-toastify";
import type { NoteDTO } from "../types/NoteDTO";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (note: NoteDTO): Promise<void> => {
    try {
      const res = await createNote(note);
      if (res.status !== 201) {
        throw new Error("Error al crear la publicacion");
      }
      toast.success("¡Nota creada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/notes");
    } catch (error: any) {
      console.error(error);
      toast.error("Error al eliminar la nota", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-200  py-20">
        <FormNote
          title="NUEVA NOTA"
          greenAction="Publicar"
          onSubmit={handleCreate}
          initialData={{ author: "", description: "" }}
        />
      </div>
    </div>
  );
};

export default CreateBlogPage;
