import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductionService, Cosecha, Producto } from '../../services/production.service';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  
  showForm = false;
  isEditMode = false; 
  cosechas: Cosecha[] = [];
  listaProductos: Producto[] = [];

  nuevaCosecha: Cosecha = {
    idCosecha: undefined,
    producto: { idProducto: null },
    fechaCosecha: '',
    cantidadCosechada: 0,
    observaciones: ''
  };

  constructor(private productionService: ProductionService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.productionService.getCosechas().subscribe({
      next: (data) => this.cosechas = data,
      error: (err) => console.error('Error al recuperar cosechas:', err)
    });

    this.productionService.getProductos().subscribe({
      next: (data) => this.listaProductos = data,
      error: (err) => console.error('Error al recuperar productos:', err)
    });
  }

  abrirFormulario() {
    this.isEditMode = false;
    this.nuevaCosecha = { idCosecha: undefined, producto: { idProducto: null }, fechaCosecha: '', cantidadCosechada: 0, observaciones: '' };
    this.showForm = true;
  }

  iniciarEdicion(cosecha: Cosecha) {
    this.isEditMode = true;
    this.nuevaCosecha = {
      idCosecha: cosecha.idCosecha,
      producto: { idProducto: cosecha.producto.idProducto },
      fechaCosecha: cosecha.fechaCosecha,
      cantidadCosechada: cosecha.cantidadCosechada,
      observaciones: cosecha.observaciones
    };
    this.showForm = true;
  }

  cerrarFormulario() {
    this.showForm = false;
    this.isEditMode = false;
  }

  guardarCosecha() {
    if (!this.nuevaCosecha.producto.idProducto || !this.nuevaCosecha.fechaCosecha || !this.nuevaCosecha.cantidadCosechada) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    const payload: Cosecha = {
      idCosecha: this.nuevaCosecha.idCosecha,
      producto: { idProducto: Number(this.nuevaCosecha.producto.idProducto) },
      fechaCosecha: this.nuevaCosecha.fechaCosecha,
      cantidadCosechada: Number(this.nuevaCosecha.cantidadCosechada),
      observaciones: this.nuevaCosecha.observaciones
    };

    if (this.isEditMode && payload.idCosecha) {
      this.productionService.updateCosecha(payload.idCosecha, payload).subscribe({
        next: () => {
          alert('¡Registro de cosecha actualizado correctamente!');
          this.cerrarFormulario();
          this.cargarDatos();
        },
        error: (err) => {
          console.error(err);
          alert('Error al intentar actualizar la cosecha.');
        }
      });
    } else {
      this.productionService.createCosecha(payload).subscribe({
        next: () => {
          alert('¡Lote de producción guardado correctamente!');
          this.cerrarFormulario();
          this.cargarDatos();
        },
        error: (err) => {
          console.error(err);
          alert('Error de persistencia en el servidor.');
        }
      });
    }
  }

  eliminarCosecha(idCosecha: number | undefined) {
    if (!idCosecha) return;

    if (confirm('¿Deseas eliminar este registro de cosecha del historial del Fundo?')) {
      this.productionService.deleteCosecha(idCosecha).subscribe({
        next: () => {
          alert('Registro eliminado correctamente.');
          this.cargarDatos();
        },
        error: (err) => console.error(err)
      });
    }
  }
}