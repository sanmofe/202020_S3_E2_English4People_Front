import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MaterialDeclase } from './materialDeClase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialDeClaseServiceService {

  private apiUrl = environment.baseUrl + 'materiales';

  constructor(private http: HttpClient) { }

  getEnlaces(): Observable<Array<MaterialDeclase>>{
    return this.http.get<Array<MaterialDeclase>>(this.apiUrl);
  }

}
