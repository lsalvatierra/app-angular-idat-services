import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from './estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(
    private http: HttpClient) 
    { }


  listarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>('http://localhost:9940/api/v1/estado');
  }


}
