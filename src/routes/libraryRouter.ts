import express from "express";
import { createBook, listBooks, welcomeLibrary } from '../controllers/libraryController';

//cria as rotas do blog
const router = express.Router();

//rota de criação de um novo post/texto
router.get("/", welcomeLibrary);

//rota de criação de um novo post/texto
router.post("/book", createBook);

//rota de listagem de todos os posts/textos
router.get("/books", listBooks);


export default router;