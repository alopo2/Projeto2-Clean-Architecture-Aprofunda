import libraryService from "../../services/libraryService";
import BookStorage from "../../storage/libraryStorage";

describe('UPDATE libraryService', () => {
    beforeEach(() => {
        BookStorage.books = [];
    });

    it('deverá atualizar um livro pelo ID', () => {
        const book = libraryService.createBook({
            title: 'Orgulho e Preconceito',
            content: 'livro de romance',
            status: 'disponível',
            author: 'Jane Austen'
        });

        const updatedBook = libraryService.updateBook(book.id, {
            title: 'Orgulho e Preconceito - Edição Atualizada',
            content: 'livro de romance - Edição Atualizada',
            status: 'disponível',
            author: 'Jane Austen'
        });

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