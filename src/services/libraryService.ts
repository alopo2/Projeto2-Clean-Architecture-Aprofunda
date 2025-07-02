import libraryFactory from "../factories/libraryFactory";
import BookStorage from "../storage/libraryStorage"; //refatorar depois

interface BookData {
  title: string;
  content: string;
  status: string;
  author: string;
}

// Define a estrutura de dados completa de um texto através de herança da interface TextData
// e inclui os campos adicionais necessários para o armazenamento gerados automaticamente
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
  }

};
