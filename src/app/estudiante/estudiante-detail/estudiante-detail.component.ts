import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteDetail } from '../estudianteDetail';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: ['./estudiante-detail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  @Input() estudianteDetail: EstudianteDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.estudianteDetail.id);
  }

}
