import { Trash2, SquarePen } from "lucide-react";
import { useState } from "react";
import { type NoteType } from "../types/NoteType";
import { toast } from "react-toastify";
import { deleteNote } from "../services/noteService";
import { useNavigate } from "react-router-dom";

const Notes = ({ _id, author, description, createdAt, onDelete }: NoteType) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const navigate = useNavigate();

  const handleLike = () => {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
  };

  const delNote = async (id: number) => {
    try {
      const res = await deleteNote(id);

      if (res.status !== 200)
        throw new Error(`Error al eliminar la publicacion ${id}`);

      toast.success("¡Nota eliminada con éxito", {
        position: "bottom-left",
        autoClose: 3000,
        theme: "colored",
      });

      if (onDelete) onDelete(id);
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
    <div className="bg-amber-200 p-4 rounded-tr-lg border border-amber-600">
      <div className="flex justify-between">
        <h2 className="font-serif font-semibold text-xl text-amber-600">
          {author}
        </h2>
        <div className="flex gap-4">
          <SquarePen
            className="text-gray-600 cursor-pointer"
            onClick={() => navigate(`/updateBlog/${_id}`)}
          />
          <Trash2
            className="text-red-500 cursor-pointer"
            onClick={() => delNote(_id)}
          />
        </div>
      </div>

      <p className=" text-xl text-center m-2 font-caveat overflow-y-scroll max-h-60 ">
        "{description}"
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleLike}
          className="bg-pink-300 rounded-full px-2 hover:bg-red-500  cursor-pointer"
        >
          {likes} ❤️
        </button>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default Notes;
