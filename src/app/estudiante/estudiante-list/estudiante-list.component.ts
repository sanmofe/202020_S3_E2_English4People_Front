import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudianteServiceService} from '../estudiante-service.service';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  constructor(private service: EstudianteServiceService) { }
  estudiantes: Array<Estudiante>;
  getEstudiantes(): any{
    return this.service.getEstudiantes().subscribe(c => this.estudiantes = c);
  }
  ngOnInit() {
    this.getEstudiantes();
    console.log("init");
  }

}
