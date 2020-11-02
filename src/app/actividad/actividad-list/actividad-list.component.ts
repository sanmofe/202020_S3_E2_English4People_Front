import { Component, OnInit } from '@angular/core';
import { Actividad} from '../actividad';
import { ActividadServiceService} from '../actividad-service.service';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  constructor(private service: ActividadServiceService) { }
  private actividades: Array<Actividad>

  getActividades():any
  {
   return this.service.getActividades().subscribe(c => this.actividades = c);
  }

  ngOnInit() {
    this.getActividades();
  }

}
