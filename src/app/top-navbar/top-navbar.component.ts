import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openHamburgerMenu() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.classList.toggle("open");
    });
  }
}
