import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  idCliente: number | null;
  nombreCliente: string;
  telefono: string;
  direccion: string;
  tipoCliente: 'Mayorista' | 'Exportador' | 'Minorista';
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> { return this.http.get<Customer[]>(this.apiUrl); }
  createCustomer(c: Customer): Observable<Customer> { return this.http.post<Customer>(this.apiUrl, c); }
  updateCustomer(id: number, c: Customer): Observable<Customer> { return this.http.put<Customer>(`${this.apiUrl}/${id}`, c); }
  deleteCustomer(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}