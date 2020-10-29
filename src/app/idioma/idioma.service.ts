import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idioma } from './idioma';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IdiomaService {
  private apiUrl = environment.baseUrl + 'idiomas.json';

  constructor(private http: HttpClient) {}

  getIdiomas(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.apiUrl);
  }
}
