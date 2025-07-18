import { Book } from "../../models/libraryModel";
import { bookModel } from "./mongooseBookModel";
import libraryService from "../../services/libraryService";

export class MongoBookRepository {
    async createBook(book: Book): Promise<Book> {
        const newBook = new bookModel(book);
        return await newBook.save();
    }

    async getAllBooks(): Promise<Book[]> {
        return await bookModel.find().exec();
    }

    async getBookById(id: string): Promise<Book | null> {
        return await bookModel.findById(id).exec();
    }

    async updateBook(id: string, book: Partial<Book>): Promise<Book | null> {
        return await bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
    }

    async deleteBook(id: string): Promise<void> {
        await bookModel.findByIdAndDelete(id).exec();
    }
}