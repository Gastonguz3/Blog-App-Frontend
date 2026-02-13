import { useNavigate, useParams } from "react-router-dom";
import FormPublication from "../components/FormPublication";
import { useEffect, useState } from "react";
import { getPublicationById, updatePublication } from "../services/publicationService";
import { toast } from "react-toastify";
import type { PublicationType } from "../types/PublicationType";

const UpdateBlogPage = () => {
  const id = useParams();
  const navigate = useNavigate()

  const [initialData, setInitialData] = useState({
    author: "",
    description: "",
    createdAt: ""
  })

  useEffect( () => {
      const fetchPubli = async () => {
        try {
          const response = await getPublicationById(Number(id));

          setInitialData({
            author: response.data.author,
            description: response.data.description,
            createdAt: response.data.createdAt
          });

        } catch (error: any) {
          console.error(error);
        }
      };

      fetchPubli(); 
  }, [id])

  const handlePut = async (publi: PublicationType) =>{
    const res = await updatePublication(Number(id), publi)
      if (res.status === 200) {
        toast.success("Publicacion actualizada con éxito!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        });
        navigate("/");
      } else {
        toast.error("Error al actualizar la publicacion", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        });
      }
    ;
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-200  py-20">
        <FormPublication title="ACTUALIZAR NOTA" greenAction="Actualizar" onSubmit={handlePut} initialData={initialData} />
      </div>
    </div>
  );
};

export default UpdateBlogPage;
