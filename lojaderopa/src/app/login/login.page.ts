import { Component } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authService: AuthService) {}

  onLogin(email: string, password: string) {
    const isAuthenticated = this.authService.login(email, password);
    if (isAuthenticated) {
      // Usuário autenticado com sucesso
    } else {
      // Falha na autenticação
    }
  }
}

