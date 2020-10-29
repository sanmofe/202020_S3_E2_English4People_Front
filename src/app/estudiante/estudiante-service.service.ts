import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Estudiante } from './estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {

  private apiUrl = environment.baseUrl + 'estudiantes';

constructor(private http: HttpClient) { }
getEstudiantes(): Observable<Array<Estudiante>>{
  return this.http.get<Array<Estudiante>>(this.apiUrl);
}
}
