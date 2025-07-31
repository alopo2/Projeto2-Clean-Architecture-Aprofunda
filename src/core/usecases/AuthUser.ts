import { IUserRepository } from "../repositories/IUserRepository";
import { gerarToken } from "../../shared/helpers/jwt";
import bcrypt from 'bcrypt';

interface IAuthInput {
    email: string,
    password: string
}

export class AuthUser{
    constructor(private userRepository: IUserRepository) {}

    async execute({email, password}: IAuthInput): Promise<String>{
        const user = await this.userRepository.findByEmail(email);

        if(!user ){
            throw new Error("credenciais inválidas")
        }
        const comparePassword = await bcrypt.compare(password, user.password);

        if(!comparePassword){
            throw new Error("credenciais inválidas")
        }

        const token = gerarToken({email: user.email});

        return token

    }
}