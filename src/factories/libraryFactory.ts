import { v4 as uuidv4 } from "uuid";
import { Book } from '../models/libraryModel';

interface BookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

export default {
  create: ({ title, content, status, author }: BookData): Book => {
    return new Book({
      id: uuidv4(),
      title,
      content,
      status,
      author,
      created_at: new Date().toLocaleDateString("pt-BR"),
    });
  },
};