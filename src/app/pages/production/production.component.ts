import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  selector:'app-production',
  standalone:true,
  imports:[
    SidebarComponent
  ],
  templateUrl:'./production.component.html',
  styleUrls:['./production.component.css']
})
export class ProductionComponent {}