import { useNavigate } from "react-router-dom";
import FormNote from "../components/Form/FormNote";
import { createNote } from "../services/noteService";
import { toast } from "react-toastify";
import type { NoteDTO } from "../types/NoteDTO";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (note: NoteDTO) => {
    try {
      await createNote(note);
      toast.success("¡Nota creada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/notes");
    } catch (error: any) {
      const message = error.response?.data?.message || "Error inesperado";
      toast.error(message, {
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
          initialData={{ description: "" }}
        />
      </div>
    </div>
  );
};

export default CreateBlogPage;
