import { Component, OnInit, Input } from '@angular/core';
import { Clase } from '../clase';
import { ClaseDetail } from '../claseDetail';

@Component({
  selector: 'app-clase-detail',
  templateUrl: './clase-detail.component.html',
  styleUrls: []
})
export class ClaseDetailComponent implements OnInit {

  @Input() claseDetail: ClaseDetail;

  selectedClase: Clase;

  constructor() { }

  ngOnInit() {
    console.log(this.claseDetail.id);
  }

}
