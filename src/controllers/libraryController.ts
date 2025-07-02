import { Request, Response } from 'express';
import libraryService from '../services/libraryService';

export const welcomeLibrary = async (_: Request, res: Response): Promise<void> => {
    const welcomeMessage = 'Bem-vindo à API de Biblioteca!';
   
    res
    .status(200)
    .json(`${welcomeMessage}`);
}

export const createBook = async (req: Request, res: Response): Promise<void> => {
    const { title, content, status, author } = req.body;
    const newBook = libraryService.createBook({ title, content, status, author });

    res
    .status(201)
    .json(`Livro ${newBook.title} criado com sucesso!`);
}

export const listBooks = async (_: Request, res: Response): Promise<void> => {
    const books = libraryService.listBooks();
    res
    .status(200)
    .json(books);
}