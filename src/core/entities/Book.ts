export interface BookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export class Book {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public author: string,
    public status: string,
    public created_at: Date | string
  ) {}

}