// tests/mocks/FakeBookRepository.ts
import { IBookRepository } from "../../core/repositories/IBookRepository";
import { Book, BookData } from "../../core/entities/Book";

export class FakeBookRepository implements IBookRepository {
  private books: Book[] = [];

  async createBook(book: Book): Promise<void> {
    this.books.push(book);
  }

  async listBooks(): Promise<Book[]> {
    return this.books;
  }

  async getBookById(id: string): Promise<Book | null> {
    return this.books.find((b) => b.id === id) || null;
  }

  async updateBook(id: string, data: Partial<BookData>): Promise<Book | null> {
    const book = this.books.find((b) => b.id === id);
    if (!book) return null;

    Object.assign(book, data);
    return book;
  }

  async deleteBookById(id: string): Promise<void> {
    this.books = this.books.filter((b) => b.id !== id);
  }
}