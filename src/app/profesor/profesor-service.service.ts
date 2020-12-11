import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Profesor} from './profesor';
import { Observable } from 'rxjs';
import { ProfesorDetail } from './profesorDetail';

@Injectable({
  providedIn: 'root',
})
export class ProfesorServiceService {

  private apiUrl = environment.baseUrl + 'profesores';
constructor(private http: HttpClient) {
 }
getProfesores():Observable<Array<ProfesorDetail>>{
  return this.http.get<Array<ProfesorDetail>>(this.apiUrl);
}

getProfesorDetail(profesorId): Observable<ProfesorDetail> {
  return this.http.get<ProfesorDetail>(`${this.apiUrl}/${profesorId}`);
}

createProfesor(profesor: Profesor): Observable<Profesor> {
  return this.http.post<Profesor>(this.apiUrl, profesor);
}

}
