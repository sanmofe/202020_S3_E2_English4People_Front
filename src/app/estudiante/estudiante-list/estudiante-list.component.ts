import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteServiceService} from '../estudiante-service.service';
import {EstudianteDetail} from '../estudianteDetail';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: []
})
export class EstudianteListComponent implements OnInit {

  constructor(private service: EstudianteServiceService) { }
  estudiantes: Array<Estudiante>;
  selectedEstudiante: EstudianteDetail;
  selected = false;

  onSelected(e: EstudianteDetail):void{
    this.selected = true;
    this.selectedEstudiante = e;
  }

  getEstudiantes(): any{
    return this.service.getEstudiantes().subscribe(c => this.estudiantes = c);
  }
  ngOnInit() {
    this.getEstudiantes();
    console.log("init");
  }

}
