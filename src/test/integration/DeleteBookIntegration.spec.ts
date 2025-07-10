import request from "supertest";

import app from "../..";

describe("DELETE /book/:id", () => {
  let bookId: string;

  beforeAll(async () => {
    const { body } = await request(app).post("/book").send({
      title: "Razão e Sensibilidade",
      content: "livro de romance",
      status: "disponível",
      author: "Jane Austen",
    });
    bookId = body.id
  });
  
  it("deve retornar 200 quando remover um livro com sucesso", async () => {
    const response = await request(app).delete(`/book/${bookId}`)

    expect(response.status).toBe(200);
    expect(response.body).toBe(`Livro com ID ${bookId} deletado com sucesso!`);
  });

});
