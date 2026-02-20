export type NoteProps = {
  _id: string;
  author: {_id: string, name: string, email: string};
  description: string;
  createdAt: string;
  onDelete?: (id: string) => void;
};
