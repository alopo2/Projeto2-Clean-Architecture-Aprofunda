import express from "express";
import { createBook, listBooks, welcomeLibrary, getBookById, deleteBook, updateBook } from '../controllers/libraryController';

//cria as rotas da biblioteca
const libraryRouter = express.Router();

//rota de criação de um novo livro
libraryRouter.get("/", welcomeLibrary);

//rota de criação de um novo livro
libraryRouter.post("/book", createBook);

//rota de listagem de todos os livros
libraryRouter.get("/books", listBooks);

//rota de listagem de um livro específico
libraryRouter.get("/book/:id", getBookById);

//rota de exclusão de um livro específico
libraryRouter.delete("/book/:id", deleteBook);

//rota de atualização de um livro específico
libraryRouter.patch("/book/:id", updateBook);


export default libraryRouter;