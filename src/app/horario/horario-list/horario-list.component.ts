import { Component, OnInit } from '@angular/core';
import { Horario } from '../horario';
import { HorarioServiceService} from '../horario-service.service';

@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit {

  constructor(private service: HorarioServiceService) { }
  horarios: Array<Horario>;
  getHorarios(): any{
    return this.service.getHorarios().subscribe(h => this.horarios = h);
  }
  ngOnInit() {
    this.getHorarios();
  }

}
