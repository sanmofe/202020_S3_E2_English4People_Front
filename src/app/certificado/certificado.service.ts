import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Certificado} from './certificado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {


  private apiUrl = environment.baseUrl + 'certificados';
constructor(private http: HttpClient) {
 }
getCertificados():Observable<Array<Certificado>>{
  return this.http.get<Array<Certificado>>(this.apiUrl);

}
}

