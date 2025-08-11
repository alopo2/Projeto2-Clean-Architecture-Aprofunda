import request from "supertest";
import app from "../..";
import mongoose from "mongoose";
import connectToMongoDB from "../../infra/database/mongoConnect";

describe("GET /", () => {
  beforeAll(async () => {
    await connectToMongoDB();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("deverá retornar uma mensagem de boas vindas", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toBe("Bem-vindo à API de Biblioteca!");
  });
});