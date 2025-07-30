import { UserData, User } from "../entities/User";

export interface IUserRepository {
  createUser(user: User): Promise<void>;
  listUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
  updateUser(id: string, data: Partial<UserData>): Promise<User | null>;
  deleteUserById(id: string): Promise<void>;
}