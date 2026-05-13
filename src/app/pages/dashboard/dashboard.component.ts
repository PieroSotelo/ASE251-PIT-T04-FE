import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  standalone:true,
  imports:[SidebarComponent],
  template:`
  <div class="layout">

    <app-sidebar/>

    <div class="content">

      <div class="hero-banner">
        <div>
          <h1>Dashboard Agrícola</h1>
          <p>Monitoreo general de producción, ventas y clientes.</p>
        </div>

        <div>
          🌾
        </div>
      </div>

      <div class="grid grid-4">
        <div class="metric green">
          Producción Total
          <br><br>
          1,250 kg
        </div>

        <div class="metric blue">
          Ventas
          <br><br>
          S/ 48,320
        </div>

        <div class="metric orange">
          Clientes
          <br><br>
          156
        </div>

        <div class="metric purple">
          Rendimiento
          <br><br>
          94%
        </div>
      </div>

      <div class="grid grid-2">

        <div class="card">
          <h2>Estado de Cultivos</h2>

          <p>Palta Hass</p>
          <div class="progress">
            <span style="width:90%"></span>
          </div>

          <br>

          <p>Uva Red Globe</p>
          <div class="progress">
            <span style="width:75%"></span>
          </div>

          <br>

          <p>Manzana Gala</p>
          <div class="progress">
            <span style="width:65%"></span>
          </div>

        </div>

        <div class="card">
          <h2>Registrar Información</h2>

          <input placeholder="Nombre del cultivo">
          <input placeholder="Cantidad producida">
          <input placeholder="Fecha de cosecha">

          <button>Guardar Registro</button>
        </div>

      </div>

    </div>

  </div>
  `
})
export class DashboardComponent {}