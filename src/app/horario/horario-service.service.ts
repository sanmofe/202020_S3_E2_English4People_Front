import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Horario } from './horario';
import { Observable } from 'rxjs';
import { HorarioDetail } from './horarioDetail';

@Injectable({
  providedIn: 'root'
})
export class HorarioServiceService {

  private apiUrl = environment.baseUrl + 'horarios';

constructor(private http: HttpClient) { }
getHorarios(): Observable<Array<HorarioDetail>>{
  return this.http.get<Array<HorarioDetail>>(this.apiUrl);
}
}
