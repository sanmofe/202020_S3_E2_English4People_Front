import { Component, OnInit, Input } from '@angular/core';
import { DiaSemana } from '../diaSemana';

@Component({
  selector: 'app-diaSemana-detail',
  templateUrl: './diaSemana-detail.component.html',
  styleUrls: ['./diaSemana-detail.component.css']
})
export class DiaSemanaDetailComponent implements OnInit {

  @Input() diaSemanaDetail: DiaSemana;

  constructor() { }

  ngOnInit() {
    console.log(this.diaSemanaDetail.id);
  }

}
