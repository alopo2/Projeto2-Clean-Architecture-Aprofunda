export interface UserData {
  id?: string;
  name: string;
  login: string;
  email: string;
  password: string;
}

export class User {
  public readonly id?: string;
  public name: string;
  public login: string;
  public email: string;
  public password: string;

  constructor(name: string, login: string, email: string, password: string, id?: string) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.email = email;
    this.password = password;
  }
}