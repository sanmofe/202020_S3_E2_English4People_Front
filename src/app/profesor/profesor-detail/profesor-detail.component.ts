import { Component, OnInit,Input } from '@angular/core';
import {Profesor} from '../profesor';
import { ProfesorDetail } from '../profesorDetail';

@Component({
  selector: 'app-profesor-detail',
  templateUrl: './profesor-detail.component.html',
  styleUrls: []
})
export class ProfesorDetailComponent implements OnInit {

  @Input() profesorDetail: ProfesorDetail;
  selectedProfesor: Profesor;


  constructor() { }

  ngOnInit() {
  }

}
