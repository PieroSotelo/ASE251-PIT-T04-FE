
import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  standalone:true,
  imports:[SidebarComponent],
  template:`
  <div class="layout">
    <app-sidebar/>
    <div class="content">
      <div class="card">
        <h1>Production Management</h1>
        <div class="card">
          <h3>Manzana Gala</h3>
          <p>Campo Norte - 10 hectáreas</p>
          <div class="progress"><span style="width:88%"></span></div>
        </div>
        <div class="card">
          <h3>Manzana Fuji</h3>
          <p>Campo Sur - 5 hectáreas</p>
          <div class="progress"><span style="width:65%"></span></div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ProductionComponent {}
