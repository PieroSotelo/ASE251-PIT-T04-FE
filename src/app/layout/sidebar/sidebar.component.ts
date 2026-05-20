import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showMenu=false;
  nombreUsuario: string = '';
  cargoUsuario: string = '';
  Date = Date;

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('userNombre') || 'Usuario';
    this.cargoUsuario = localStorage.getItem('userCargo') || 'Trabajador';
  }

  toggleMenu(){
    this.showMenu=!this.showMenu;
  }

  logout() {
    localStorage.removeItem('userNombre');
    localStorage.removeItem('userCargo');
    this.router.navigate(['/login']);
  }

}