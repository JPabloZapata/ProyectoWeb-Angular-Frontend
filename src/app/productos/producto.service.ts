import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private urlEndPoint: string ='http://localhost:8080/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint);
  }

  crearProductos(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
  }

  eliminar(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

  actualizar(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.id}`, producto, {headers: this.httpHeaders})
  }

  getCliente(id): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`)
  }




}
