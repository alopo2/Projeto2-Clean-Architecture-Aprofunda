import request from "supertest";
import app from '../../app';

describe("GET /books", () => {
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
  
  it("deve retornar todos os livros", async () => {
    const response = await request(app).get("/books");
    expect(response.status).toBe(200);
  });
});