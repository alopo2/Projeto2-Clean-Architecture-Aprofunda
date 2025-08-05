import { LibraryService } from "../../services/libraryService";
import { FakeBookRepository } from "../mocks/FakeBookRepository";


describe('DELETE libraryService', () => {
    let libraryService: LibraryService;

    beforeEach(() => {
        const fakeRepo = new FakeBookRepository();
        libraryService = new LibraryService(fakeRepo);
    })

    it('deverá deletar um livro pelo ID', async () => {
        const book = await libraryService.createBook({
            title: 'Razão e Sensibilidade',
            content: 'livro de romance',
            status: 'available',
            author: 'Jane Austen'
        });

        const deletedBook = libraryService.deleteBookById(book.id);
        expect(deletedBook).resolves.toBeUndefined();
        await expect(libraryService.getBookById(book.id)).resolves.toBeNull();
    });
})