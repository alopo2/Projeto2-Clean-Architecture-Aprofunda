import { v4 as uuidv4 } from "uuid";

export interface BookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export class Book {
  public readonly id: string;
  public readonly created_at: Date;

  constructor(
    public title: string,
    public content: string,
    public author: string,
    public status: string,
    created_at?: Date,
    id?: string
  ) {
    this.id = id || uuidv4(); // Gera um novo id caso não seja fornecido
    this.created_at = created_at || new Date();
  }
}