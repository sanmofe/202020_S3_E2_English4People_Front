import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Estudiante } from './estudiante';
import { Observable } from 'rxjs';
import { EstudianteDetail } from './estudianteDetail';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {

  private apiUrl = environment.baseUrl + 'estudiantes';

constructor(private http: HttpClient) { }
getEstudiantes(): Observable<Array<EstudianteDetail>>{
  return this.http.get<Array<EstudianteDetail>>(this.apiUrl);
}

getEstudianteDetail(estudianteId): Observable<EstudianteDetail> {
  return this.http.get<EstudianteDetail>(`${this.apiUrl}/${estudianteId}`);
}
}

