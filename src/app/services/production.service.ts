import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  idProducto: number;
  nombreProducto: string;
}

export interface Cosecha {
  idCosecha?: number;
  producto: { idProducto: number | null; nombreProducto?: string };
  cantidadCosechada: number;
  fechaCosecha: string;
  observaciones?: string;
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

  createCosecha(cosecha: Cosecha): Observable<Cosecha> {
    return this.http.post<Cosecha>(this.urlCosechas, cosecha);
  }

  updateCosecha(id: number, cosecha: Cosecha): Observable<Cosecha> {
    return this.http.put<Cosecha>(`${this.urlCosechas}/${id}`, cosecha);
  }

  deleteCosecha(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlCosechas}/${id}`);
  }
}