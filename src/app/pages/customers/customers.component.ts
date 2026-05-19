import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/sidebar.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  selectedCustomer:any=null;

  customers=[

    {
      name:'Carlos Mendoza',
      email:'carlos@gmail.com',
      phone:'987654321',
      address:'Lima, Perú',
      purchases:12,
      status:'Activo'
    },

    {
      name:'María Torres',
      email:'maria@gmail.com',
      phone:'999888777',
      address:'Ica, Perú',
      purchases:7,
      status:'Activo'
    }

  ];

  openCustomer(customer:any){
    this.selectedCustomer=customer;
  }

  closeModal(){
    this.selectedCustomer=null;
  }

}