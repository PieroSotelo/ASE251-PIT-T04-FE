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
          <h1>Gestión de Ventas</h1>
          <p>Control completo de ventas agrícolas.</p>
        </div>

        <div>💰</div>
      </div>

      <div class="grid grid-4">
        <div class="metric green">Ventas Totales<br><br>S/ 48,320</div>
        <div class="metric blue">Pedidos<br><br>24</div>
        <div class="metric orange">Facturas<br><br>18</div>
        <div class="metric purple">Ganancias<br><br>23%</div>
      </div>

      <div class="card">
        <h2>Nueva Venta</h2>

        <input placeholder="Cliente">
        <input placeholder="Producto">
        <input placeholder="Cantidad">

        <button>Guardar Venta</button>
      </div>

      <div class="card table-container">

        <table>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Estado</th>
          </tr>

          <tr>
            <td>001</td>
            <td>Agro Perú</td>
            <td>Palta Hass</td>
            <td><span class="status success">PAGADO</span></td>
          </tr>

          <tr>
            <td>002</td>
            <td>Green Valley</td>
            <td>Uva Red Globe</td>
            <td><span class="status pending">PENDIENTE</span></td>
          </tr>

        </table>

      </div>

    </div>

  </div>
  `
})
export class SalesComponent {}