import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent {
  
  showForm = false;

  
  listaProductos = [
    { idProducto: 1, nombreProducto: 'Palta Hass' },
    { idProducto: 2, nombreProducto: 'Uva Red Globe' },
    { idProducto: 3, nombreProducto: 'Arándano Biloxi' },
    { idProducto: 4, nombreProducto: 'Manzana Gala' }
  ];

  
  nuevaCosecha = {
    producto: {
      idProducto: null
    },
    fechaCosecha: '',
    cantidad: null,
    lote: ''
  };


  cosechas = [
    { idCosecha: 1, producto: { nombreProducto: 'Manzana Gala' }, fechaCosecha: '2026-05-19', cantidad: 12500, lote: 'Lote Norte' },
    { idCosecha: 2, producto: { nombreProducto: 'Palta Hass' }, fechaCosecha: '2026-05-15', cantidad: 8400, lote: 'Lote Este' }
  ];

  abrirFormulario() {
    this.showForm = true;
  }

  cerrarFormulario() {
    this.showForm = false;
    this.nuevaCosecha = {
      producto: { idProducto: null },
      fechaCosecha: '',
      cantidad: null,
      lote: ''
    };
  }

 
  guardarCosecha() {
    if (!this.nuevaCosecha.producto.idProducto || !this.nuevaCosecha.fechaCosecha || !this.nuevaCosecha.cantidad || !this.nuevaCosecha.lote) {
      alert('Por favor, completa todos los campos del formulario de producción.');
      return;
    }

  
    const prodSeleccionado = this.listaProductos.find(p => p.idProducto === Number(this.nuevaCosecha.producto.idProducto));

    const cosechaGuardada = {
      idCosecha: this.cosechas.length + 1,
      producto: { nombreProducto: prodSeleccionado ? prodSeleccionado.nombreProducto : 'Producto' },
      fechaCosecha: this.nuevaCosecha.fechaCosecha,
      cantidad: Number(this.nuevaCosecha.cantidad),
      lote: this.nuevaCosecha.lote
    };

    this.cosechas.unshift(cosechaGuardada);
    alert('¡Producción/Cosecha registrada con éxito! Payload listo para Backend.');
    this.cerrarFormulario();
  }
}