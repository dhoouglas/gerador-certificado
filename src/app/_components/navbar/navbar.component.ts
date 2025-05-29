import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.mensasage();
  }

  mensasage() {
    console.log('meu componente navbar inicializo (Foi clicado)');
  }
}
