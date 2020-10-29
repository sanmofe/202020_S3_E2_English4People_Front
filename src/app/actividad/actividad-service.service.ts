import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Actividad } from './actividad';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActividadServiceService {

  private apiUrl = environment.baseUrl + 'actividades';

constructor(private http: HttpClient) { }
getActividades(): Observable<Array<Actividad>>
{
  return this.http.get<Array<Actividad>>(this.apiUrl);
}
}
