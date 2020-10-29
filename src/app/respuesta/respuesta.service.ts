import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from './respuesta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  private apiUrl = environment.baseUrl + 'respuestas';

  constructor(private http: HttpClient) { }

  getRespuestas(): Observable<Respuesta[]>{
    return this.http.get<Respuesta[]>(this.apiUrl);
  }

}
