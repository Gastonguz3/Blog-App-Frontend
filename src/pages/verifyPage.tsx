import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyUser } from "../services/authService";

const VerifyPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        if (!token) {
          toast.error("Token invalido",{
            position: "bottom-left",
            autoClose: 3000,
            theme: "colored",
          } );
          return;
        }

        await verifyUser(token);

        toast.success("Cuenta verificada correctamente", {
          position: "bottom-left",
          autoClose: 3000,
          theme: "colored",
        });

        navigate("/");

      } catch (error: any) {
        const message = error.response?.data?.message || "Error inesperado";
        toast.error(message, {
          position: "bottom-left",
          autoClose: 3000,
          theme: "colored",
        });
      }
    };

    verify();
    
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Verificando cuenta...</h1>
    </div>
  );
};

export default VerifyPage;