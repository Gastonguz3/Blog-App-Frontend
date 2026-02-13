import type { PublicationDTO } from "./PublicationDTO";

export type FormPublicationType = {
  title: string;
  greenAction: string;
  onSubmit: (data: PublicationDTO) => Promise<void>;
  initialData: PublicationDTO;
};