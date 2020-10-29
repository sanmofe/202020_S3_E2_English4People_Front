import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contrato } from './contrato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoServiceService {

  private apiUrl = environment.baseUrl + 'contratos';

constructor(private http: HttpClient) { }
getContratos(): Observable<Array<Contrato>>{
  return this.http.get<Array<Contrato>>(this.apiUrl);
}
}
