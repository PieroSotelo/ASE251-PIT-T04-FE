import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  usernameInput = '';
  password = '';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    if (!this.usernameInput || !this.password) {
      alert('Por favor, ingresa tus credenciales.');
      return;
    }

   
    this.authService.getUsuarios().subscribe({
      next: (usuarios) => {
      
        const usuarioValido = usuarios.find(u => 
          u.usuario === this.usernameInput && u.contrasena === this.password
        );

        if (usuarioValido) {
       
          const nombreCompletoReal = `${usuarioValido.nombre} ${usuarioValido.apellido}`;

          alert(`¡Inicio de sesión exitoso! Bienvenido, ${nombreCompletoReal}.`);
          
        
          localStorage.setItem('userCargo', usuarioValido.cargo);
          localStorage.setItem('userNombre', nombreCompletoReal);
          
          this.router.navigate(['/dashboard']); 
        } else {
          alert('Credenciales incorrectas. Verifica tu nombre de usuario y contraseña.');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error de conexión con el Fundo Server. Asegúrate de tener levantado el Docker Compose.');
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
}