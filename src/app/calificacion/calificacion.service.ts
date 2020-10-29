import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calificacion } from './calificacion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private apiUrl = environment.baseUrl + 'calificacion'; //calificaciones? Lo sabré cuando me mueva a la vm xd

  constructor(private http: HttpClient) { }

  getCalificaciones(): Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(this.apiUrl);
  }

}
