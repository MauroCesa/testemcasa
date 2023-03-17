import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() { }

  login(email: string, password: string): boolean {
    // Implemente aqui a lógica para autenticar o usuário
    // Se o usuário for autenticado com sucesso, defina a propriedade isAuthenticated para true e retorne true
    // Caso contrário, retorne false
  }

  logout(): void {
    // Implemente aqui a lógica para fazer logout do usuário
    // Defina a propriedade isAuthenticated para false
  }

  isAuthenticated(): boolean {
    // Implemente aqui a lógica para verificar se o usuário está autenticado
    // Retorne o valor da propriedade isAuthenticated
  }

  resetPassword(email: string): boolean {
    // Implemente aqui a lógica para redefinir a senha do usuário
    // Se a redefinição da senha for bem-sucedida, retorne true
    // Caso contrário, retorne false
  }
}
