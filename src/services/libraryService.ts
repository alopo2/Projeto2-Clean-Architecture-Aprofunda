import { IBookRepository } from "../core/repositories/IBookRepository";
import { BookData, Book } from "../core/entities/Book";
import bookFactory from "../factories/bookFactory";

export class LibraryService {
  constructor(private readonly bookRepository: IBookRepository) {}

  async createBook(data: BookData): Promise<Book> {
    const book = bookFactory.create(data);
    await this.bookRepository.createBook(book);
    return book;
  }

  async listBooks(): Promise<Book[]> {
    return this.bookRepository.listBooks();
  }

  async getBookById(id: string): Promise<Book | null> {
    return this.bookRepository.getBookById(id);
  }

  async updateBook(id: string, data: Partial<BookData>): Promise<Book | null> {
    return this.bookRepository.updateBook(id, data);
  }

  async deleteBookById(id: string): Promise<void> {
    return this.bookRepository.deleteBookById(id);
  }
}