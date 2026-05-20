import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  idProducto: number;
  nombreProducto: string;
  variedad?: string;
}

export interface Cosecha {
  idCosecha: number | null;
  producto: {
    idProducto: number | null;
    nombreProducto?: string;
  };
  fechaCosecha: string;
  cantidadKg: number;
  costoPorKg: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  private urlCosechas = 'http://localhost:8080/api/cosechas';
  private urlProductos = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

  getCosechas(): Observable<Cosecha[]> {
    return this.http.get<Cosecha[]>(this.urlCosechas);
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlProductos);
  }

  createCosecha(cosecha: any): Observable<Cosecha> {
    return this.http.post<Cosecha>(this.urlCosechas, cosecha);
  }

  deleteCosecha(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlCosechas}/${id}`);
  }
}