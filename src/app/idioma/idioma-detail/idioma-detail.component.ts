import { Component, OnInit, Input } from '@angular/core';
import { Idioma } from '../idioma';

@Component({
  selector: 'app-idioma-detail',
  templateUrl: './idioma-detail.component.html',
  styleUrls: ['./idioma-detail.component.css']
})
export class IdiomaDetailComponent implements OnInit {

  @Input() idiomaDetail: Idioma;

  constructor() { }

  ngOnInit() {
    console.log(this.idiomaDetail.id);
  }
}
