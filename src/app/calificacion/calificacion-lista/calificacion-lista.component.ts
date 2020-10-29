import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

@Component({
  selector: 'app-calificacion-lista',
  templateUrl: './calificacion-lista.component.html',
  styleUrls: ['./calificacion-lista.component.scss']
})
export class CalificacionListaComponent implements OnInit {

  constructor(private calificacionService: CalificacionService) { }

  calificaciones: Array<Calificacion>;

  getCalificaciones(): void {
    this.calificacionService.getCalificaciones()
      .subscribe(calificaciones => {
        this.calificaciones = calificaciones;
      });
  }

  ngOnInit() {
    this.getCalificaciones();
  }

}
