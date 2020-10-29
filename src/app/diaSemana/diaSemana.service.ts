import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaSemana } from './diaSemana';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiaSemanaService {

  private apiUrl = environment.baseUrl + 'diasSemana';

  constructor (private http: HttpClient) {}

  getDiasSemana(): Observable<DiaSemana[]> {
    return this.http.get<DiaSemana[]>(this.apiUrl);
}
}
