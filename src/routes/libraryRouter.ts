import express from "express";
import { createBook, listBooks, welcomeLibrary } from '../controllers/libraryController';

//cria as rotas do blog
const libraryRouter = express.Router();

//rota de criação de um novo post/texto
libraryRouter.get("/", welcomeLibrary);

//rota de criação de um novo post/texto
libraryRouter.post("/book", createBook);

//rota de listagem de todos os posts/textos
libraryRouter.get("/books", listBooks);


export default libraryRouter;