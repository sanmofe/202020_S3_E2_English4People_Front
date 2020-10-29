import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Profesor} from './profesor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {

  private apiUrl = environment.baseUrl + 'profesores';
constructor(private http: HttpClient) {
 }
getProfesores():Observable<Array<Profesor>>{
  return this.http.get<Array<Profesor>>(this.apiUrl);

}
}
