import request from "supertest";
import app from "../..";

describe('PATCH /book/:id', () => {
    let bookId: string;
    
    beforeAll(async () => {
        const { body } = await request(app).post('/book').send({
        title: 'Orgulho e Preconceito',
        content: 'livro de romance',
        status: 'disponível',
        author: 'Jane Austen',
    });
    bookId = body.id;
});

    it('deve retornar 200 quando atualizar um livro com sucesso', async () => {
        const response = await request(app)
            .patch(`/book/${bookId}`)
            .send({
                title: 'Orgulho e Preconceito - Edição Atualizada'
            });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(`Livro com ID ${bookId} atualizado com sucesso!`);
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
