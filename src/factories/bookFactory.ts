import { v4 as uuidv4 } from 'uuid';
import { Book, BookData } from '../core/entities/Book';

const bookFactory = {
  create: ({ title, content, status, author }: BookData): Book => {
    return new Book(
      uuidv4(),
      title,
      content,
      author,
      status,
      new Date()
    );
  },
};

export default bookFactory;