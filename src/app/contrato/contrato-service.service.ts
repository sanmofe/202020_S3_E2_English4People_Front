import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contrato } from './contrato';
import { Observable } from 'rxjs';
import { ContratoDetail } from './contratoDetail';

@Injectable({
  providedIn: 'root'
})
export class ContratoServiceService {

  private apiUrl = environment.baseUrl + 'contratos';

  constructor(private http: HttpClient) { }

  getContratos(): Observable<Array<ContratoDetail>>{
    return this.http.get<Array<ContratoDetail>>(this.apiUrl);
  }

  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(environment.baseUrl + 'contratos', contrato);
  }
}




