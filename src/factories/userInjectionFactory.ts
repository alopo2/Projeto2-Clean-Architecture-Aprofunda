import { UserService } from '../services/userService';
import { MongoUserRepository } from '../infra/database/mongoUserRepository';

const userRepository = new MongoUserRepository();
const userService = new UserService(userRepository);

export default userService;