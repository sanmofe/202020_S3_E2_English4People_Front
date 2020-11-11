import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Actividad } from './actividad';
import { Observable } from 'rxjs';
import { ActividadDetail } from './actividadDetail';

@Injectable({
  providedIn: 'root'
})
export class ActividadServiceService {

  private apiUrl = environment.baseUrl + 'actividades';

constructor(private http: HttpClient) { }
getActividades(): Observable<Array<Actividad>>
{
  return this.http.get<Array<ActividadDetail>>(this.apiUrl);
}
}
