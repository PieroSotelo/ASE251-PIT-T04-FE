import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/sidebar.component';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  purchases: number;
  status: 'Activo' | 'Pendiente' | 'Suspendido';
}

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  public selectedCustomer: Customer | null = null;

  public customers: Customer[] = [
    {
      id: 'CUST-001',
      name: 'Carlos Mendoza',
      email: 'carlos@gmail.com',
      phone: '987654321',
      address: 'Lima, Perú',
      purchases: 12,
      status: 'Activo'
    },
    {
      id: 'CUST-002',
      name: 'María Torres',
      email: 'maria@gmail.com',
      phone: '999888777',
      address: 'Ica, Perú',
      purchases: 7,
      status: 'Activo'
    }
  ];

  public trackByCustomerId(index: number, customer: Customer): string {
    return customer.id;
  }

  public openCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  public closeModal(): void {
    this.selectedCustomer = null;
  }
}