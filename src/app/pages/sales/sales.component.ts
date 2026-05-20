import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  
  
  showForm = false;

  
  listaClientes = [
    { idCliente: 1, nombre: 'Agro Perú SAC' },
    { idCliente: 2, nombre: 'Green Valley Export' },
    { idCliente: 3, nombre: 'Frutas del Sur S.A.' }
  ];

  
  nuevaVenta = {
    cliente: {
      idCliente: null
    },
    fechaVenta: '',
    total: null,
    tipoVenta: 'Nacional' 
  };

  
  ventas = [
    { idVenta: '001', cliente: { nombre: 'Agro Perú SAC' }, fechaVenta: '2026-05-15', total: 1250.50, tipoVenta: 'Nacional', estado: 'PAGADO' },
    { idVenta: '002', cliente: { nombre: 'Green Valley Export' }, fechaVenta: '2026-05-18', total: 4800.00, tipoVenta: 'Exportación', estado: 'PENDIENTE' }
  ];

  abrirFormulario() {
    this.showForm = true;
  }

  cerrarFormulario() {
    this.showForm = false;
    
    this.nuevaVenta = {
      cliente: { idCliente: null },
      fechaVenta: '',
      total: null,
      tipoVenta: 'Nacional'
    };
  }

  
  guardarVenta() {
    if (!this.nuevaVenta.cliente.idCliente || !this.nuevaVenta.fechaVenta || !this.nuevaVenta.total) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Buscamos el nombre del cliente seleccionado para pintarlo en la tabla
    const clienteSeleccionado = this.listaClientes.find(c => c.idCliente === Number(this.nuevaVenta.cliente.idCliente));

    // Estructuramos el objeto final simulando la respuesta del servidor
    const ventaGuardada = {
      idVenta: `00${this.ventas.length + 1}`,
      cliente: { nombre: clienteSeleccionado ? clienteSeleccionado.nombre : 'Cliente Desconocido' },
      fechaVenta: this.nuevaVenta.fechaVenta,
      total: Number(this.nuevaVenta.total),
      tipoVenta: this.nuevaVenta.tipoVenta,
      estado: 'PAGADO'
    };

    // Insertamos la nueva venta en la tabla
    this.ventas.unshift(ventaGuardada);
    
    alert('¡Venta registrada con éxito en el sistema!');
    this.cerrarFormulario();
  }
}