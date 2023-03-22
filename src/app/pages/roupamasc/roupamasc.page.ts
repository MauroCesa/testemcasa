import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupamasc',
  templateUrl: './roupamasc.page.html',
  styleUrls: ['./roupamasc.page.scss'],
})
export class RoupamascPage implements OnInit {

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
