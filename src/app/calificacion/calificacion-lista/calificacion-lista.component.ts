import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';
import { CalificacionDetail } from '../calificacionDetail';

@Component({
  selector: 'app-calificacion-lista',
  templateUrl: './calificacion-lista.component.html',
  styleUrls: []
})
export class CalificacionListaComponent implements OnInit {

  constructor(private calificacionService: CalificacionService) { }

  calificaciones: Array<CalificacionDetail>;

  selected = false;

  selectedCalificacion: Calificacion;

  getCalificaciones(): void {
    this.calificacionService.getCalificaciones()
      .subscribe(calificaciones => {
        this.calificaciones = calificaciones;
      });
  }

  onSelected(c: Calificacion): void{
    this.selected = true;
    this.selectedCalificacion = c;
  }

  ngOnInit() {
    this.getCalificaciones();
  }

}
