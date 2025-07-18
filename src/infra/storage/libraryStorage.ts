export interface Book {
  id: string;
  title: string;
  content: string;
  status: string;
  author: string;
  created_at: string;
}

class BookStorage {
  
  private static instance: BookStorage;
  
  public books: Book[] = [];

  private constructor() {}

  public static getInstance(): BookStorage {
    if (!BookStorage.instance) {
      BookStorage.instance = new BookStorage();
    }
    return BookStorage.instance;
  }

  public add(book: Book): void {
    this.books.push(book);
  }
  
  public getAll(): Book[] {
    return this.books;
  }

  public getBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  public deleteBook(id: string): Book[] {
    this.books = this.books.filter((book) => book.id !== id);
    return this.books;
  }

}

export default BookStorage.getInstance();