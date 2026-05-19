import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  // Campos del formulario vinculados mediante ngModel
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  // Acción del botón principal "Registrarse"
  handleRegister() {
    if (this.fullName && this.email && this.password && this.confirmPassword) {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
        return;
      }
      
      alert('¡Cuenta creada con éxito! Volviendo al inicio de sesión...');
      this.goToLogin(); // Ejecuta el salto directo
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  }

  // Fuerza la navegación nativa de Angular hacia http://localhost:4200/ o /login
  goToLogin() {
    this.router.navigate(['/login']).then(navigated => {
      if (!navigated) {
        // Opción de respaldo de alta seguridad si el router tuviera micro-retrasos
        this.router.navigateByUrl('/login');
      }
    });
  }
}