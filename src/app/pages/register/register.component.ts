import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  username = '';
  phone = '';
  role: 'Administrador' | 'Encargado' | 'Trabajador' = 'Trabajador';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  handleRegister() {
  
    if (this.firstName && this.lastName && this.username && this.phone && this.password && this.confirmPassword) {
      
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
        return;
      }
      
    
      const nuevoUsuario: Usuario = {
        nombre: this.firstName,
        apellido: this.lastName,
        telefono: this.phone,
        cargo: this.role,
        usuario: this.username,
        contrasena: this.password
      };

     
      this.authService.register(nuevoUsuario).subscribe({
        next: (response) => {
          alert(`¡Cuenta creada con éxito para ${response.nombre} ${response.apellido}! Redirigiendo...`);
          this.goToLogin();
        },
        error: (err) => {
          console.error(err);
          alert('Error al registrar: El nombre de usuario ya está en uso en el Fundo.');
        }
      });

    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}