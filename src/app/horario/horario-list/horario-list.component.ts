import { Component, OnInit } from '@angular/core';
import { Horario } from '../horario';
import { HorarioServiceService} from '../horario-service.service';
import { HorarioDetail } from '../horarioDetail';

@Component({
  selector: 'app-horario-list',
  templateUrl: './horario-list.component.html',
  styleUrls: ['./horario-list.component.css']
})
export class HorarioListComponent implements OnInit {

  selectedHorario: Horario;
  selected = false;

  onSelected(b: Horario): void {
    this.selected = true;
    this.selectedHorario = b;
  }

  constructor(private service: HorarioServiceService) { }
  horarios: Array<HorarioDetail>;
  getHorarios(): any{
    return this.service.getHorarios().subscribe(h => this.horarios = h);
  }
  ngOnInit() {
    this.getHorarios();
  }

}
