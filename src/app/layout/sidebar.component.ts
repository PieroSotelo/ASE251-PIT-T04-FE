import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-sidebar',
  standalone:true,
  imports:[RouterLink],
  template:`
  <div class="sidebar">

    <div>
      <h2>🌿 Fundo Agrícola</h2>
      <p>Sistema Inteligente de Gestión</p>
    </div>

    <a routerLink="/dashboard">📊 Dashboard</a>
    <a routerLink="/production">🌱 Producción</a>
    <a routerLink="/sales">💰 Ventas</a>
    <a routerLink="/customers">👥 Clientes</a>

    <div class="card info-card" style="margin-top:auto;background:rgba(255,255,255,0.1);color:white">
      <h3>Temporada 2026</h3>
      <p>Producción estable y ventas en crecimiento.</p>
    </div>

  </div>
  `
})
export class SidebarComponent{}