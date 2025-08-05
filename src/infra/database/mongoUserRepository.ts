import { userModel } from "./mongooseUserModel";
import { UserData, User } from "../../core/entities/User";
import { IUserRepository } from "../../core/repositories/IUserRepository";
import bcrypt from "bcrypt";

export class MongoUserRepository implements IUserRepository {
  async getUserById(id: string): Promise<User | null> {
    const userDoc = await userModel.findById(id).exec();
    if (!userDoc) return null;

    return new User(
      userDoc.name,
      userDoc.login,
      userDoc.email,
      userDoc.password,
      userDoc._id.toString(),
    );
  }

  async listUsers(): Promise<User[]> {
    const users = await userModel.find().exec();
    return users.map(u =>
      new User(
        u.name,
        u.login,
        u.email,
        u.password,
        u._id.toString(),
      )
    );
  }

  async createUser(user: User): Promise<void> {
  const hashedPassword = await bcrypt.hash(user.password, 10); 

  const doc = new userModel({
    name: user.name,
    login: user.login,
    email: user.email,
    password: hashedPassword
  });
  await doc.save();
}

  async updateUser(id: string, data: Partial<UserData>): Promise<User | null> {
    const updated = await userModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();

    if (!updated) return null;

    return new User(
      updated.name,
      updated.login,
      updated.email,
      updated.password, 
      updated._id.toString()
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await userModel.findOne({ email }).exec();
    if (!userDoc) return null;

    return new User(
      userDoc.name,
      userDoc.login,
      userDoc.email,
      userDoc.password, 
      userDoc._id.toString()
    );
  }

  async deleteUserById(id: string): Promise<void> {
    await userModel.findByIdAndDelete(id).exec();
  }
}