import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  stats = {
    produccionTotalKg: 48500,  
    ventasTotalesSol: 24850.00, 
    clientesRegistrados: 1245,  
    productosCatalogo: 12       
  };

  
  produccionPorCultivo = [
    { nombre: 'Palta Hass', porcentaje: '40%', hectareas: '256 ha' },
    { nombre: 'Uva Red Globe', porcentaje: '25%', hectareas: '160 ha' },
    { nombre: 'Arándano Biloxi', porcentaje: '20%', hectareas: '128 ha' },
    { nombre: 'Manzana Gala', porcentaje: '15%', hectareas: '96 ha' }
  ];

 
  actividadesRecientes = [
    {
      tipo: 'produccion',
      titulo: 'Nueva cosecha registrada',
      descripcion: 'Palta Hass - 8,400 Kg en Lote Este',
      tiempo: 'Hace 2 horas',
      claseBg: 'green-bg',
      icono: '✔'
    },
    {
      tipo: 'venta',
      titulo: 'Venta completada',
      descripcion: 'Cliente: Green Valley Export - S/. 4,800.00',
      tiempo: 'Hace 5 hours',
      claseBg: 'blue-bg',
      icono: '💰'
    },
    {
      tipo: 'cliente',
      titulo: 'Nuevo cliente registrado',
      descripcion: 'Frutas del Sur S.A. - Tipo: Exportador',
      tiempo: 'Hace 1 día',
      claseBg: 'purple-bg',
      icono: '👥'
    }
  ];

  constructor() {}

  ngOnInit(): void {

  }
}