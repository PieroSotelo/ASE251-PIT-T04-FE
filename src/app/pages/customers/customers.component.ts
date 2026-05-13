
import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  standalone:true,
  imports:[SidebarComponent],
  template:`
  <div class="layout">
    <app-sidebar/>
    <div class="content">
      <div class="grid grid-3">
        <div class="metric green">156 Clientes</div>
        <div class="metric orange">20k Ingresos</div>
        <div class="metric blue">4.7 Rating</div>
      </div>

      <div class="card">
        <h3>Green Valley Co.</h3>
        <p>Total Compras: 45</p>
        <button>Ver Detalles</button>
      </div>

      <div class="card">
        <h3>Farm Fresh Market</h3>
        <p>Total Compras: 20</p>
        <button>Contacto</button>
      </div>
    </div>
  </div>
  `
})
export class CustomersComponent {}
