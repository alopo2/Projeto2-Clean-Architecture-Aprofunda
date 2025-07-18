import { Request, Response } from "express";
import { LibraryService } from "../services/libraryService";
import { IBookRepository } from "../core/repositories/IBookRepository";

const bookRepository: IBookRepository = new BookRepository();
const libraryService = new LibraryService(bookRepository);

export const welcomeLibrary = async (_: Request, res: Response): Promise<void> => {
  res.status(200).json("Bem-vindo à API de Biblioteca!");
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, status, author } = req.body;
    const newBook = await libraryService.createBook({ title, content, status, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o livro." });
  }
};

export const listBooks = async (_: Request, res: Response): Promise<void> => {
  try {
    const books = await libraryService.listBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar livros." });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const book = await libraryService.getBookById(id);
    if (!book) {
      res.status(404).json({ message: `Livro com ID ${id} não encontrado.` });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o livro." });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await libraryService.deleteBookById(id);
    // Como deleteBookById retorna void, você pode assumir que se não lançou erro, funcionou
    res.status(200).json({ message: `Livro com ID ${id} deletado com sucesso!` });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o livro." });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content, status, author } = req.body;
    const updatedBook = await libraryService.updateBook(id, { title, content, status, author });
    if (!updatedBook) {
      res.status(404).json({ message: `Livro com ID ${id} não encontrado.` });
      return;
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o livro." });
  }
};