import request from "supertest";
import app from '../../app';

describe('PATCH /book/:id', () => {
    let bookId: string;

    beforeAll(async () => {
        const createResponse = await request(app)
            .post('/book')
            .send({
                title: 'Orgulho e Preconceito',
                author: 'Jane Austen'
            });
        bookId = createResponse.body.id || createResponse.body._id;
    });

    it('deve retornar 200 quando atualizar um livro com sucesso', async () => {
        const response = await request(app)
            .patch(`/book/${bookId}`)
            .send({
                title: 'Orgulho e Preconceito - Edição Atualizada'
            });

        expect(response.status).toBe(200);
        expect(response.body.title).toBe(`Orgulho e Preconceito - Edição Atualizada`);
        expect(response.body.id || response.body._id).toBe(bookId);
    });

    it('deve retornar 404 quando tentar atualizar um livro inexistente', async () => {
        const response = await request(app)
            .patch('/book/12345')
            .send({
                title: 'Livro Inexistente'
            });

        expect(response.status).toBe(404);
        expect(response.body).toEqual('Livro com ID 12345 não encontrado.');
    });
});
