import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-topbar',
  standalone:true,
  templateUrl:'./topbar.component.html',
  styleUrls:['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  nombreUsuario: string = '';

  ngOnInit() {
    this.nombreUsuario = localStorage.getItem('userNombre') || 'Usuario';
  }
}