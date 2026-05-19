import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  selector:'app-sales',
  standalone:true,
  imports:[
    SidebarComponent
  ],
  templateUrl:'./sales.component.html',
  styleUrls:['./sales.component.css']
})
export class SalesComponent {}