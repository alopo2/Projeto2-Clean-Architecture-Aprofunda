import { BookData, Book } from "../entities/Book";

export interface IBookRepository {
  createBook(book: Book): Promise<void>;
  listBooks(): Promise<Book[]>;
  getBookById(id: string): Promise<Book | null>;
  updateBook(id: string, data: Partial<BookData>): Promise<Book | null>;
  deleteBookById(id: string): Promise<void>;
}