import type { NoteDTO } from "./NoteDTO";

export type FormNoteType = {
  title: string;
  greenAction: string;
  onSubmit: (data: NoteDTO) => Promise<void>;
  initialData: NoteDTO;
};
