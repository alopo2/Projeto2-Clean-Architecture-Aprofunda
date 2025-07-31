import { Request, Response } from 'express'; 
import userService from '../factories/userInjectionFactory'; 

export const welcomeUser = async (_: Request, res: Response): Promise<void> => {
  res.status(200).json('Bem-vindo à API de Usuários!');
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, login,password } = req.body;

  try {
    const newUser = await userService.createUser({ name, email, login, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

export const listUsers = async (_: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar usuários', error });
  }
};
