import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

beforeAll(async () => {
  jest.setTimeout(20000);
 
  const uri = process.env.MONGODB_URI!;
  if (!uri) throw new Error("MONGODB_URI não definida para testes");
  await mongoose.connect(uri, { });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase(); 
  await mongoose.connection.close();
});