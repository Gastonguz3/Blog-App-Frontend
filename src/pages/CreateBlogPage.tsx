import { useNavigate } from "react-router-dom";
import FormNote from "../components/Form/FormNote";
import { createNote } from "../services/noteService";
import { toast } from "react-toastify";
import type { NoteDTO } from "../types/NoteDTO";
import { useEffect, useState } from "react";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")

  useEffect(()=>{
    const user = localStorage.getItem("user");

    if (user) {
      const parsedUser = JSON.parse(user)
      setUsername(parsedUser.name);
    }
  }, [])

  const handleCreate = async (note: NoteDTO): Promise<void> => {
    try {
      await createNote(note);
      toast.success("¡Nota creada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/notes");
    } catch (error: any) {
      const status = error.response?.status;

      switch (status) {
        case 400:
          toast.warning("Completar todos los campos", {
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          });
          break;
        case 403:
          toast.error("No esta registrado", { //No autorizado
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
          title="NUEVA NOTA"
          greenAction="Publicar"
          onSubmit={handleCreate}
          initialData={{ author: username, description: "" }}
        />
      </div>
    </div>
  );
};

export default CreateBlogPage;
