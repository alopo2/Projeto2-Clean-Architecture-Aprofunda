import { UserData, User } from "../core/entities/User";
import userFactory from "../factories/userFactory";
import { IUserRepository } from "../core/repositories/IUserRepository";

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(data: UserData): Promise<User> {
    const user = userFactory.create(data);
    await this.userRepository.createUser(user);
    return user;
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.listUsers();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.getUserById(id);
  }

  async updateUser(id: string, data: Partial<UserData>): Promise<User | null> {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUserById(id: string): Promise<void> {
    return this.userRepository.deleteUserById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}