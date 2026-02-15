import { NavLink } from "react-router-dom";
import Notes from "../components/Notes";
import { type NoteType } from "../types/NoteType";
import { useEffect, useState } from "react";
import { getAllNotes } from "../services/noteService";
import formatData from "../utils/formDate";

const FeedPage = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getAllNotes();
        setNotes(response.data);
      } catch (error: any) {
        console.error(error);
      }
    };
    fetchNote();
  }, []);

  const handleDelete = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-150 py-8 space-y-6">
          {notes.map((note) => (
            <Notes
              key={note._id}
              _id={note._id}
              author={note.author}
              description={note.description}
              createdAt={formatData(note.createdAt)}
              onDelete={handleDelete}
            />
          ))}
          {/*Luego borrar */}
          <Notes
              _id={1}
              author={"Gaston"}
              description={"Hola a todos"}
              createdAt={"14 de feb de 2026"}
              onDelete={handleDelete}
            />
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

export default FeedPage;
