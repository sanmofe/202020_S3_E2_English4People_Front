import { Component, OnInit } from '@angular/core';
import { Clase } from '../clase';
import { ClaseServiceService} from '../clase-service.service';

@Component({
  selector: 'app-clase-list',
  templateUrl: './clase-list.component.html',
  styleUrls: ['./clase-list.component.css']
})
export class ClaseListComponent implements OnInit {

  constructor(private service: ClaseServiceService) { }
  private clases : Array<Clase>
  getClases(): any
  {
    return this.service.getClases.subscribe(c => this.clases = c);
  }
  ngOnInit() {
    this.getClases();
  }

}


