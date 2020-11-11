import { Component, OnInit, Input } from '@angular/core';
import { CalificacionDetail } from '../calificacionDetail';

@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  @Input() calificacionDetail: CalificacionDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.calificacionDetail.id);
  }

}
