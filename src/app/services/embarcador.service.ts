import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Embarcador } from '../models/Embarcador';

@Injectable({
  providedIn: 'root'
})
export class EmbarcadorService {
  private url = environment.URL_API;

  constructor(private http: HttpClient) { }

  listar(): Observable<Embarcador[]>{
    return this.http.get<Embarcador[]>(`${this.url}/embarcador/listar`)
  }

  cadastrar(formulario: any): Observable<Embarcador>{
    return this.http.post<Embarcador>(`${this.url}/embarcador/cadastrar`,formulario);
  }

}
