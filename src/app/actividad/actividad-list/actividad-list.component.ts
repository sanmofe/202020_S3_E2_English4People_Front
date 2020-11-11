import { Component, OnInit } from '@angular/core';
import { Actividad} from '../actividad';
import { ActividadServiceService} from '../actividad-service.service';
import { ActividadDetail} from '../actividadDetail';

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  constructor(private service: ActividadServiceService) { }
   actividades: Array<Actividad>
   selectedActividad: ActividadDetail;
   selected = false;

   onSelected(acti: ActividadDetail):void{
    this.selected = true;
    this.selectedActividad = acti;
  }

  getActividades():any
  {
   return this.service.getActividades().subscribe(acti => this.actividades = acti);
  }

  ngOnInit() {
    this.getActividades();
    console.log("init");
  }

}
