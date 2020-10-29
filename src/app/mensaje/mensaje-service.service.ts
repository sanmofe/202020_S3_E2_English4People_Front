import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mensaje } from './mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeServiceService {

  private apiUrl = environment.baseUrl + 'mensajes';

constructor(private http: HttpClient) { }
getMensajes(): Observable<Array<Mensaje>>{
  return this.http.get<Array<Mensaje>>(this.apiUrl);
}
}
