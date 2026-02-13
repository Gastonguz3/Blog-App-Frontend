export type PublicationType = {
  _id : number,
  author: string;
  description: string;
  createdAt: string
  onDelete?: (id: number) => void
}