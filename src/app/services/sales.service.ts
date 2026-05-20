import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.service'; 

export interface Venta {
  idVenta?: number;
  cliente: { idCliente: number | null; nombreCliente?: string };
  fechaVenta: string;
  total: number;
  tipoVenta: 'Nacional' | 'Exportación';
}

@Injectable({ providedIn: 'root' })
export class SalesService {
  private apiUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) {}


  getVentas(): Observable<Venta[]> { 
    return this.http.get<Venta[]>(this.apiUrl); 
  }


  createVenta(v: Venta): Observable<Venta> { 
    return this.http.post<Venta>(this.apiUrl, v); 
  }


  updateVenta(id: number, v: Venta): Observable<Venta> { 
    return this.http.put<Venta>(`${this.apiUrl}/${id}`, v); 
  }


  deleteVenta(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
}