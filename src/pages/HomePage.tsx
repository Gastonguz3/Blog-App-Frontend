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
    setPublis((prevPublis) => prevPublis.filter((publi) => publi.id !== id));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-150 py-8 space-y-6">
          {publis.map((publi) => (
            <Publication
              key={publi.id}
              id={publi.id}
              author={publi.author}
              description={publi.description}
              createdAt={formatData(publi.createdAt)}
              onDelete={handleDelete}
            />
          ))}
          {/*<Publication
            author="Gaston"
            description="Un recorrido hacia la sensibilidad poética” a cargo de la docente y especialista en literatura Infantil y Juvenil (LIJ), Natalia Jáuregui Lorda.
            La exposición comenzó con lecturas y recitados de poemas de diferentes autores y autoras, y textos de autores anónimos, desconocidos y tradicionales, acompañando cada una de ellas con la información del portador de texto (libro).
            Un recorrido hacia la sensibilidad poética” a cargo de la docente y especialista en literatura Infantil y Juvenil (LIJ), Natalia Jáuregui Lorda.
            La exposición comenzó con lecturas y recitados de poemas de diferentes autores y autoras, y textos de autores anónimos, desconocidos y tradicionales, acompañando cada una de ellas con la información del portador de"
            date="24/9/2026"
          />
          <Publication
            author="Gaston"
            description="De esta manera logró mostrar el universo diverso que existen sobre las composiciones poéticas que motivan, divierten y acercan a niñas y niños en el lenguaje lírico y poético como: canciones de cuna, coplas, retahílas, jitanjáforas, limerick, adivinanzas y trabalenguas, poemas humorísticos, juegos, poemas esdrújulos, poemas al vesre, jerigonzas, poemas disparatados o del absurdo, chinventos, poemas sin rima, hechizos… Y la lista sigue y sigue como ese poema de María Elena Walsh en que la cabeza de la viborita llegó, pero su colita no"
            date="24/9/2026"
          />*/}
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
