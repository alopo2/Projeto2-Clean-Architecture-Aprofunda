import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";
import { BookData } from "../../core/entities/Book";

describe('UPDATE libraryService', () => {
  let libraryService: LibraryService;

  beforeEach(() => {
    const fakeRepo = new FakeBookRepository();
    libraryService = new LibraryService(fakeRepo);
  });

  it('deverá atualizar um livro pelo ID', async () => {
    const bookData: BookData = {
      title: 'Orgulho e Preconceito',
      content: 'livro de romance',
      status: 'disponível',
      author: 'Jane Austen'
    };

    const book = await libraryService.createBook(bookData);

    const updatedData: Partial<BookData> = {
      title: 'Orgulho e Preconceito - Edição Atualizada',
      content: 'livro de romance - Edição Atualizada',
    };

    const updatedBook = await libraryService.updateBook(book.id, updatedData);

    expect(updatedBook).toEqual({
      id: book.id,
      title: 'Orgulho e Preconceito - Edição Atualizada',
      content: 'livro de romance - Edição Atualizada',
      created_at: book.created_at,
      status: 'disponível',
      author: 'Jane Austen'
    });
  });
});