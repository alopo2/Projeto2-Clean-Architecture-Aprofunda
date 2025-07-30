import express from "express";
import { createBook, listBooks, welcomeLibrary, getBookById, deleteBook, updateBook } from '../controllers/libraryController';


const libraryRouter = express.Router();


libraryRouter.get("/", welcomeLibrary);


libraryRouter.post("/book", createBook);


libraryRouter.get("/books", listBooks);


libraryRouter.get("/book/:id", getBookById);


libraryRouter.delete("/book/:id", deleteBook);


libraryRouter.patch("/book/:id", updateBook);


export default libraryRouter;