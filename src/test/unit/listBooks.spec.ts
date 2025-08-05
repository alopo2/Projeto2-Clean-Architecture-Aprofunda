import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";

describe('GET libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    });

    it('deverá retornar todos os livros criados', async () => {
        await libraryService.createBook({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        });

        const listBookCreated = await libraryService.listBooks();

        expect(listBookCreated[0].title).toBe('Orgulho e Preconceito')
    })
});