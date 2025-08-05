import request from "supertest";
import app from "../..";
import mongoose from "mongoose";
import connectToMongoDB from "../../infra/database/mongoConnect";

describe("GET /", () => {
  beforeAll(async () => {
    await connectToMongoDB(); // conecta antes de iniciar os testes
  });

  afterAll(async () => {
    await mongoose.connection.close(); // fecha após os testes
  });

  it("deverá retornar uma mensagem de boas vindas", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Bem-vindo à API de Biblioteca!");
  });
});