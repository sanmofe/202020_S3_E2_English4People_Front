import { Component, OnInit } from '@angular/core';
import {Profesor} from '../profesor';
import {ProfesorDetail} from '../profesorDetail';
import {ProfesorServiceService} from '../profesor-service.service';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {

  constructor(private service: ProfesorServiceService) { }
  public profesores:Array<ProfesorDetail>;
  selectedProfesor: ProfesorDetail;
  selected = false;

  onSelected(b: ProfesorDetail):void{
    this.selected = true;
    this.selectedProfesor = b;
  }

  getProfesores():void{
    this.service.getProfesores().subscribe(profesores => {
      this.profesores = profesores;
    });
  }
  ngOnInit() {
    this.getProfesores();
  }

}
