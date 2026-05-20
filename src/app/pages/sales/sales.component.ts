import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalesService, Venta } from '../../services/sales.service';
import { CustomerService, Customer } from '../../services/customer.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  
  showForm = false;
  isEditMode = false; 
  ventas: Venta[] = [];
  listaClientes: Customer[] = []; 
  totalVendido = 0;

  nuevaVenta: Venta = {
    idVenta: undefined,
    cliente: { idCliente: null },
    fechaVenta: '',
    total: 0,
    tipoVenta: 'Nacional'
  };

  constructor(
    private salesService: SalesService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.salesService.getVentas().subscribe({
      next: (data) => {
        this.ventas = data;
        this.calcularSumaTotal();
      },
      error: (err) => console.error('Error al obtener ventas:', err)
    });

    this.customerService.getCustomers().subscribe({
      next: (data) => this.listaClientes = data,
      error: (err) => console.error('Error al obtener clientes:', err)
    });
  }

  calcularSumaTotal(): void {
    this.totalVendido = this.ventas.reduce((acc, v) => acc + Number(v.total), 0);
  }

  abrirFormulario() {
    this.isEditMode = false;
    this.nuevaVenta = { idVenta: undefined, cliente: { idCliente: null }, fechaVenta: '', total: 0, tipoVenta: 'Nacional' };
    this.showForm = true;
  }

  iniciarEdicion(venta: Venta) {
    this.isEditMode = true;
    this.nuevaVenta = {
      idVenta: venta.idVenta,
      cliente: { idCliente: venta.cliente.idCliente },
      fechaVenta: venta.fechaVenta,
      total: venta.total,
      tipoVenta: venta.tipoVenta
    };
    this.showForm = true;
  }

  cerrarFormulario() {
    this.showForm = false;
    this.isEditMode = false;
    this.nuevaVenta = { idVenta: undefined, cliente: { idCliente: null }, fechaVenta: '', total: 0, tipoVenta: 'Nacional' };
  }

  guardarVenta() {
    if (!this.nuevaVenta.cliente.idCliente || !this.nuevaVenta.fechaVenta || !this.nuevaVenta.total) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    const payload: Venta = {
      idVenta: this.nuevaVenta.idVenta,
      cliente: { idCliente: Number(this.nuevaVenta.cliente.idCliente) },
      fechaVenta: this.nuevaVenta.fechaVenta,
      total: Number(this.nuevaVenta.total),
      tipoVenta: this.nuevaVenta.tipoVenta
    };

    if (this.isEditMode && payload.idVenta) {
      this.salesService.updateVenta(payload.idVenta, payload).subscribe({
        next: () => {
          alert('¡Venta modificada correctamente en SQL Server!');
          this.cerrarFormulario();
          this.cargarDatos();
        },
        error: (err) => {
          console.error(err);
          alert('Error al intentar actualizar la transacción.');
        }
      });
    } else {
      this.salesService.createVenta(payload).subscribe({
        next: () => {
          alert('¡Venta guardada correctamente!');
          this.cerrarFormulario();
          this.cargarDatos();
        },
        error: (err) => {
          console.error(err);
          alert('Error al intentar registrar la venta.');
        }
      });
    }
  }

  eliminarVenta(idVenta: number | undefined) {
    if (!idVenta) return;

    if (confirm('¿Estás completamente seguro de eliminar este registro de venta? Esto alterará los balances financieros.')) {
      this.salesService.deleteVenta(idVenta).subscribe({
        next: () => {
          alert('Registro de venta removido de la base de datos.');
          this.cargarDatos(); 
        },
        error: (err) => {
          console.error(err);
          alert('No se pudo eliminar la venta. Verifica si está vinculada a un registro de Exportación.');
        }
      });
    }
  }
}