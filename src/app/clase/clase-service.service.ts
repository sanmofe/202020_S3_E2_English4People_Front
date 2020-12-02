import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Clase } from './clase';
import { Observable } from 'rxjs';
import { ClaseDetail } from './claseDetail';


@Injectable({
  providedIn: 'root'
})
export class ClaseServiceService {

  private apiUrl = environment.baseUrl + 'clases';

constructor(private http: HttpClient) { }
getClases(): Observable<Array<ClaseDetail>>{
  return this.http.get<Array<ClaseDetail>>(this.apiUrl);
  }

createClase(clase: Clase): Observable<Clase> {
  return this.http.post<Clase>(environment.baseUrl + 'clases', clase);
  }
}
