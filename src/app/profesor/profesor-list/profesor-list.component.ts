import { Component, OnInit } from '@angular/core';
import {Profesor} from '../profesor';
import {ProfesorServiceService} from '../profesor-service.service';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {

  constructor(private service: ProfesorServiceService) { }
  public profesores:Array<Profesor>;
  getProfesores():void{
    this.service.getProfesores().subscribe(profesores => {
      this.profesores = profesores;
    });
  }
  ngOnInit() {
    this.getProfesores();
  }

}
