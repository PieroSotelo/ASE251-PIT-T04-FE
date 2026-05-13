
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  template:`
  <div style="display:flex;height:100vh">
    <div style="flex:1;background:url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600') center/cover;color:white;display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:bold">
      Tu nuevo comienzo empieza aquí
    </div>
    <div style="flex:1;padding:60px;background:white">
      <h1>Crear Cuenta</h1>
      <input placeholder="Nombre Completo">
      <input placeholder="Gmail">
      <input placeholder="Contraseña" type="password">
      <input placeholder="Confirmar Contraseña" type="password">
      <button>Registrarse</button>
    </div>
  </div>
  `
})
export class RegisterComponent{}
