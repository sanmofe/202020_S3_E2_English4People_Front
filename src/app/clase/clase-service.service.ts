import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Clase } from './Clase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaseServiceService {

  private apiUrl = environment.baseUrl + 'clases';

constructor(private http: HttpClient) { }
getClases(): Observable<Array<Clase>>{
  return this.http.get<Array<Clase>>(this.apiUrl);
}
}
