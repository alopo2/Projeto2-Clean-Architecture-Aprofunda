import { Request, Response } from 'express';
import libraryService from '../factories/libraryFactory'; 

export const welcomeLibrary = async (_: Request, res: Response): Promise<void> => {
  res.status(200).json('Bem-vindo à API de Biblioteca!');
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  const { title, content, status, author } = req.body;

  try {
    const newBook = await libraryService.createBook({ title, content, status, author });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar livro', error });
  }
};

export const listBooks = async (_: Request, res: Response): Promise<void> => {
  try {
    const books = await libraryService.listBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar livros', error });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const book = await libraryService.getBookById(id);
    if (!book) {
      res.status(404).json(`Livro com ID ${id} não encontrado.`);
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Erro ao buscar livro', error });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await libraryService.deleteBookById(id);
    res.status(200).json({ message: `Livro com ID ${id} deletado com sucesso!` });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar livro', error });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content, status, author } = req.body;

  try {
    const updatedBook = await libraryService.updateBook(id, { title, content, status, author });

    if (!updatedBook) {
      res.status(404).json(`Livro com ID ${id} não encontrado.`);
      return;
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error });
  }
};