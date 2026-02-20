import { NavLink } from "react-router-dom";
import Notes from "../components/Notes";
import { type NoteProps } from "../types/NoteProps";
import { useEffect, useState } from "react";
import { deleteNote, getAllNotes } from "../services/noteService";
import formatData from "../utils/formDate";
import { toast } from "react-toastify";

const FeedPage = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const fetchNotes = async () => {
    try {
      const response = await getAllNotes();
      setNotes(response.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id: string) => {
    
    const previosNotes = notes;
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    try {
      await deleteNote(id);
      toast.success("¡Nota eliminada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (error: any) {
      //si falla hago rollback
      setNotes(previosNotes);
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
        default: //500
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
