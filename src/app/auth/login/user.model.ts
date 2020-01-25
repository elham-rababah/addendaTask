export class loginModel {
    password: string;
    email: string;
    returnSecureToken = true;
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  }
  