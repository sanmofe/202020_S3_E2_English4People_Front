import { Component, OnInit, Input } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadDetail } from '../actividadDetail';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: []
})
export class ActividadDetailComponent implements OnInit {

  @Input() actividadDetail: ActividadDetail;

   selectedActividad: Actividad;

  constructor() { }

  ngOnInit() {
  }
}
