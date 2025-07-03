import libraryService from "../../services/libraryService";
import BookStorage from "../../storage/libraryStorage";

describe('GET libraryService', () => {
    beforeEach(() => {

       BookStorage.books = []

    });

    it('deverá retornar todos os livros criados', () => {
        libraryService.createBook({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        });

        const listBookCreated = libraryService.listBooks()

        expect(listBookCreated[0].title).toBe('Orgulho e Preconceito')
    })
});