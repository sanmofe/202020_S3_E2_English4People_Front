import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalificacionDetail } from './calificacionDetail';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private apiUrl = environment.baseUrl + 'calificaciones';

  constructor(private http: HttpClient) { }

  getCalificaciones(): Observable<Array<CalificacionDetail>>{
    return this.http.get<Array<CalificacionDetail>>(this.apiUrl);
  }

}
