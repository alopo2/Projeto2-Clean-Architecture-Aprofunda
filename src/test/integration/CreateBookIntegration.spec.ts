import request from "supertest";
import app from "../..";

describe("POST /book", () => {
  it("deverá criar um novo livro", async () => {
    const response = await request(app)
      .post("/book")
      .send({
        title: "Razão e Sensibilidade",
        content: "livro de romance",
        status: "disponível",
        author: "Jane Austen",
      });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Razão e Sensibilidade");
  });
});
