import { NavLink } from "react-router-dom";
import Publication from "../components/Publication";
import { type PublicationType } from "../types/PublicationType";
import { useEffect, useState } from "react";
import { getAllPublications } from "../services/publicationService";
import formatData from "../utils/formDate";

const HomePage = () => {
  const [publis, setPublis] = useState<PublicationType[]>([]);

  useEffect(() => {
    const fetchPubli = async () => {
      try {
        const response = await getAllPublications();
        setPublis(response.data);
      } catch (error: any) {
        console.error(error);
      }
    };
    fetchPubli();
  }, []);

  const handleDelete = (id: number) => {
    setPublis((prevPublis) => prevPublis.filter((publi) => publi._id !== id));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-150 py-8 space-y-6">
          {publis.map((publi) => (
            <Publication
              key={publi._id}
              _id={publi._id}
              author={publi.author}
              description={publi.description}
              createdAt={formatData(publi.createdAt)}
              onDelete={handleDelete}
            />
          ))}
         
        </div>
      </div>
      <NavLink
        to="/createBlog"
        className=" bg-green-300 rounded-full p-4 m-5 font-bold fixed bottom-1 right-1 cursor-pointer hover:bg-green-500 hover:text-white"
      >
        + CREAR NUEVO NOTA
      </NavLink>
    </>
  );
};

export default HomePage;
