import { Component, OnInit } from '@angular/core';
import { Idioma } from '../idioma';

@Component({
  selector: 'app-idioma-listar',
  templateUrl: './idioma-listar.component.html',
  styleUrls: ['./idioma-listar.component.css']
})
export class IdiomaListarComponent implements OnInit {

  constructor() { }

  private books: Array<Idioma>;

  ngOnInit() {
  }

}
