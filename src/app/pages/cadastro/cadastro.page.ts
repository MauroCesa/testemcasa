import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    public navCtrl: NavController,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  user: User = {
    id:0,
    name:"",
    email:"",
    password:""
  }

  formulario!: FormGroup;

  validaForm(){
    this.formulario = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  cadastro(): void{
    const data = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
    };
    this.userService.create(data).subscribe({next: (res) =>
    {
      console.log(res);
      console.log("Usuário cadastro com sucesso!")
    },
    error: (e) => console.error(e)
    });
  }

  showMenu: boolean = false;


  toggleMenu(): void {

    const hamburger = document.querySelector(".hamburger") as HTMLInputElement | null;

    const container = document.querySelector(".container") as HTMLInputElement | null;

    hamburger?.addEventListener("click", () =>
   container?.classList.toggle("show-menu")
);
  }

  dropdownVisible: boolean = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }

}
