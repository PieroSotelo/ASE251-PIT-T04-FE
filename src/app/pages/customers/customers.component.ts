import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { CustomerService, Customer } from '../../services/customer.service'; 

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = [];
  
  public selectedCustomer: Customer | null = null;
  public showModalForm: boolean = false;
  public isEditMode: boolean = false;

  public nuevoCliente: Customer = {
    idCliente: null,
    nombreCliente: '',
    telefono: '',
    direccion: '',
    tipoCliente: 'Mayorista'
  };


  constructor(private customerService: CustomerService) {}

 
  ngOnInit(): void {
    this.cargarClientes();
  }


  public cargarClientes(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.error('Error al conectar con la base de datos de AgroExportDB:', err);
        alert('No se pudo conectar con el servidor de Spring Boot.');
      }
    });
  }


  public abrirRegistrar(): void {
    this.isEditMode = false;
    this.nuevoCliente = { idCliente: null, nombreCliente: '', telefono: '', direccion: '', tipoCliente: 'Mayorista' };
    this.showModalForm = true;
  }

 
  public iniciarEdicion(customer: Customer): void {
    this.isEditMode = true;
    this.nuevoCliente = { ...customer }; 
    this.selectedCustomer = null; 
    this.showModalForm = true;
  }


  public guardarCliente(): void {
    if (!this.nuevoCliente.nombreCliente || !this.nuevoCliente.telefono || !this.nuevoCliente.direccion) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (this.isEditMode && this.nuevoCliente.idCliente) {
  
      this.customerService.updateCustomer(this.nuevoCliente.idCliente, this.nuevoCliente).subscribe({
        next: () => {
          alert('¡Cliente actualizado con éxito en SQL Server!');
          this.cargarClientes(); // Recargar la lista desde el servidor
          this.cerrarModalForm();
        },
        error: (err) => {
          console.error(err);
          alert('Error al intentar actualizar el cliente.');
        }
      });
    } else {
      // ➕ Lógica de Registrar Real (POST /api/clientes)
      this.customerService.createCustomer(this.nuevoCliente).subscribe({
        next: () => {
          alert('¡Cliente registrado con éxito en la base de datos!');
          this.cargarClientes(); // Recargar la lista desde el servidor
          this.cerrarModalForm();
        },
        error: (err) => {
          console.error(err);
          alert('Error al intentar guardar el nuevo cliente.');
        }
      });
    }
  }


  public eliminarCliente(idCliente: number | null): void {
    if (!idCliente) return;
    
    if (confirm('¿Está seguro de que desea eliminar este cliente de la base de datos?')) {
      this.customerService.deleteCustomer(idCliente).subscribe({
        next: () => {
          alert('Cliente removido del sistema de manera definitiva.');
          this.cargarClientes(); 
          this.selectedCustomer = null;
          this.cerrarModalForm();
        },
        error: (err) => {
          console.error(err);
          alert('No se puede eliminar el cliente porque posee ventas asociadas.');
        }
      });
    }
  }

  public openCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  public closeModalDetail(): void {
    this.selectedCustomer = null;
  }

  public cerrarModalForm(): void {
    this.showModalForm = false;
  }

  public trackByCustomerId(index: number, customer: Customer): number {
    return customer.idCliente || index;
  }
}