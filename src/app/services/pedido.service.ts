import { Pedido } from './../models/pedido';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url = environment.URL_API;

  constructor(private http: HttpClient) { }

  listar(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/pedido/listar`);
  }
}
