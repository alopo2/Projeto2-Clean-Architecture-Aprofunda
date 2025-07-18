import libraryFactory from "../factories/libraryFactory";
import BookStorage from "../infra/storage/libraryStorage"; //refatorar depois

interface BookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

interface Book extends BookData {
  id: string;
  created_at: string;
}

export default {
  
  createBook: ({ title, content, status, author }: BookData): Book => {
    const newBook = libraryFactory.create({ title, content, status, author });
    BookStorage.add(newBook);
    return newBook;
  },
 
  listBooks: (): Book[] => {
    return BookStorage.getAll();
  }, 

  getBookById: (id: string): Book | undefined => {
    return BookStorage.getBookById(id);
  },

  updateBook: (id: string, data: Partial<BookData>): Book | null => {
    const book = BookStorage.getBookById(id);

    if (!book) {
      return null;
    }

    if (data.title != null) {
      book.title = data.title;
    }

    if (data.content != null) {
      book.content = data.content;
    }

    if (data.status != null) {
      book.status = data.status;
    }

    if (data.author != null) {
      book.author = data.author;
    }

    return book;
  },

  deleteBookById: (id: string): Book[] => {
    return BookStorage.deleteBook(id);
  }

};
