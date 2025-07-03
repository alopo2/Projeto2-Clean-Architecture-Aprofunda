import libraryService from "../../services/libraryService";
import BookStorage from "../../storage/libraryStorage";

describe('POST libraryService', () => {
    beforeEach(() => {

        BookStorage.books = []

    });

    it('deverá criar um livro e retornar seu status', () => {
        const book = libraryService.createBook({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        });

        expect(BookStorage.books).toHaveLength(1)
        expect(book.status).toBe('disponível')
        expect(book.id).toBeTruthy()
        expect(book).toEqual(expect.objectContaining({ 
            id: expect.any(String),
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen', 
            created_at: expect.any(String)
        }));
    });

});