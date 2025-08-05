import { Book, BookData } from '../core/entities/Book';

const bookFactory = {
  create: ({ title, content, status, author }: BookData): Book => {
    return new Book(title, content, author, status);
  },
};

export default bookFactory;