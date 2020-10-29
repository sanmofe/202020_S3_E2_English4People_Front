import { Component, OnInit } from '@angular/core';
import { DiaSemana } from '../diaSemana';

@Component({
  selector: 'app-diaSemana-listar',
  templateUrl: './diaSemana-listar.component.html',
  styleUrls: ['./diaSemana-listar.component.css']
})
export class DiaSemanaListarComponent implements OnInit {

  constructor() { }

  private books: Array<DiaSemana>;

  ngOnInit() {
  }

}
