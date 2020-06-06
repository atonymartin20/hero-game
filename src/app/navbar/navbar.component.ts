import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Hero Game';
  activeDropdown = false;
  constructor() { }

  ngOnInit(): void {
  }

  activateDropdown() : void {
    this.activeDropdown = true;
  }

  closeDropdown(): void {
    this.activeDropdown = false;
  }
}
