import { Component, OnInit, Input } from '@angular/core';
import { Horario } from '../horario';
import { HorarioDetail } from '../horarioDetail';

@Component({
  selector: 'app-horario-detail',
  templateUrl: './horario-detail.component.html',
  styleUrls: []
})
export class HorarioDetailComponent implements OnInit {

  @Input() horarioDetail: HorarioDetail;

  constructor() { }

  ngOnInit() {

  }

}
