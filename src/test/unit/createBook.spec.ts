import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";

describe('POST libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    });

    it('deverá criar um livro e retornar seu status', async () => {
        const book = await libraryService.createBook({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        });

        expect(book).toBeDefined();
        expect(book.status).toBe('disponível');
        expect(book.id).toBeTruthy();
        expect(book).toEqual(expect.objectContaining({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        }));
    });

});