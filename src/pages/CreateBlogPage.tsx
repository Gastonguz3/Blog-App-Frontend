import { useNavigate } from "react-router-dom";
import FormPublication from "../components/FormPublication";
import { createPublication } from "../services/publicationService";
import { toast } from "react-toastify";
import type { PublicationDTO } from "../types/PublicationDTO";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (publi: PublicationDTO): Promise<void> => {
    try {
      const res = await createPublication(publi);
      if (res.status !== 201) {
        throw new Error("Error al crear la publicacion");
      }
      toast.success("¡Nota creada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/");
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
        <FormPublication
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
