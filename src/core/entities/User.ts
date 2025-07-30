export interface UserData {
    name: string;
    login: string; 
    email: string; 
    password: string; 
}

export class User {
    constructor(
        public name: string,
        public login: string, 
        public email: string, 
        public password: string,
        public created_at: Date | string
    ){}
}
