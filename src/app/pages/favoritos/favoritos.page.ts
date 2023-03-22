import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
