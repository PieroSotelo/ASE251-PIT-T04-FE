import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  imports:[FormsModule],
  template:`

  <div class="login-bg">

    <div class="login-card">

      <h1>🌿 Fundo Agrícola</h1>

      <input [(ngModel)]="user" placeholder="Correo electrónico">

      <input
        [(ngModel)]="pass"
        type="password"
        placeholder="Contraseña"
      >

      <button (click)="login()">
        Iniciar Sesión
      </button>

      <p>
        Usuario: admin <br>
        Contraseña: 123456
      </p>

    </div>

  </div>

  `
})
export class LoginComponent{

  user='admin';
  pass='123456';

  constructor(private router:Router){}

  login(){
    if(this.user==='admin' && this.pass==='123456'){
      this.router.navigate(['/dashboard']);
    }else{
      alert('Credenciales incorrectas');
    }
  }
}