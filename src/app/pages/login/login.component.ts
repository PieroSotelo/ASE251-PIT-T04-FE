import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router){}

  login(){
    if(this.email === 'admin@gmail.com' && this.password === '123456'){
      alert('¡Inicio de sesión exitoso!');
      this.router.navigate(['/dashboard']); // Te redirige al panel de inmediato
    } else {
      alert('Credenciales incorrectas de prueba.');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); // Navegación física a tu otro componente
  }
}