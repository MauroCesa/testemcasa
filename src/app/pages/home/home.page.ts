import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  dropdownVisible: boolean = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }

component: CadastroPage | undefined; 

navegarParaOCadastro(){
  this.navCtrl.navigateBack('/cadastro')
}


}
