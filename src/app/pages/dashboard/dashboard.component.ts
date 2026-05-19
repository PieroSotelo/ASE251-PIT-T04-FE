import { Component } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar.component';
import { TopbarComponent } from '../../layout/topbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}