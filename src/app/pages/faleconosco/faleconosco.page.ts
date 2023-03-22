import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

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
