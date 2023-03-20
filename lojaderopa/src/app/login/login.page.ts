import { Component } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: '../login/login.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class LoginPage {
  email: string ="";
  password: string ="";

  constructor(private authService: AuthService) {}

  login() {
    const isAuthenticated = this.authService.login(this.email, this.password);
    if (isAuthenticated) {
      // Usuário autenticado com sucesso
    } else {
      // Falha na autenticação
    }
  }
}

