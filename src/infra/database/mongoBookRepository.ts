import { bookModel } from "./mongooseBookModel";
import { BookData, Book } from "../../core/entities/Book";
import { IBookRepository } from "../../core/repositories/IBookRepository";

export class MongoBookRepository implements IBookRepository {
  async getBookById(id: string): Promise<Book | null> {
    const bookDoc = await bookModel.findById(id).exec();
    if (!bookDoc) return null;

    return new Book(
      bookDoc.title,
      bookDoc.content,
      bookDoc.author,
      bookDoc.status,
      bookDoc.created_at 
    );
  }

  async listBooks(): Promise<Book[]> {
    const books = await bookModel.find().exec();
    return books.map(b =>
      new Book(
        b.title,
        b.content,
        b.author,
        b.status,
        b.created_at
      )
    );
  }

  async createBook(book: Book): Promise<void> {
    const doc = new bookModel({
      title: book.title,
      content: book.content,
      author: book.author,
      status: book.status,
      created_at: book.created_at,
    });
    await doc.save();
  }

  async updateBook(id: string, data: Partial<BookData>): Promise<Book | null> {
    const updated = await bookModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();

    if (!updated) return null;

    return new Book(
      updated.title,
      updated.content,
      updated.author,
      updated.status,
      updated.created_at
    );
  }

  async deleteBookById(id: string): Promise<void> {
    await bookModel.findByIdAndDelete(id).exec();
  }
}