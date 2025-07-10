import { beforeEach } from "node:test";
import libraryService from "../../services/libraryService";
import BookStorage from "../../storage/libraryStorage";

describe('DELETE libraryService', () => {
    beforeEach(() => {
        BookStorage.books = [];
    })

    it('deverá deletar um livro pelo ID', () => {
        const book = libraryService.createBook({
            title: 'Razão e Sensibilidade',
            content: 'livro de romance',
            status: 'available',
            author: 'Jane Austen'
        });

        const deletedBook = libraryService.deleteBookById(book.id);
        expect(BookStorage.books).toHaveLength(0);
        expect(BookStorage.books).not.toContain(book);
    });
})