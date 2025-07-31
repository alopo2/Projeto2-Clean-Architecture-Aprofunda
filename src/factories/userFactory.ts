import { User, UserData } from '../core/entities/User';

const userFactory = {
  create: ({ name, login, email, password }: UserData): User => {
    return new User(
      name,
      login,
      email,
      password,
    );
  },
};

export default userFactory;