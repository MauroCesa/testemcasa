import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === 'user@example.com' && password === '123456') {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
  this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
interface LoginPage {
  getIsAuthenticated: boolean;
};

const authenticatedUser: LoginPage = {
  getIsAuthenticated: true,
};

const unauthenticatedUser: LoginPage = {
  getIsAuthenticated: false,
};

function checkAuthentication(user: LoginPage): boolean {
  return user.getIsAuthenticated;
};

  console.log(checkAuthentication(authenticatedUser));
  console.log(checkAuthentication(unauthenticatedUser));
    return this.isAuthenticated;
}


  resetPassword(email: string): boolean {
    if (email === 'user@example.com') {
      this.isAuthenticated = false;
      return true;
    } else {
      return false;
    }
  }
}
