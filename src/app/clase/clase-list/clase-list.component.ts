import { Component, OnInit } from '@angular/core';
import { Clase } from '../clase';
import { ClaseServiceService} from '../clase-service.service';
import { ClaseDetail } from '../claseDetail';

@Component({
  selector: 'app-clase-list',
  templateUrl: './clase-list.component.html',
  styleUrls: []
})
export class ClaseListComponent implements OnInit {

  selectedClase: Clase;
  selected = false;

  onSelected(a: Clase): void {
    this.selected = true;
    this.selectedClase = a;
  }

  constructor(private service: ClaseServiceService) { }
  clases: Array<ClaseDetail>;

  getClases(): any
  {
    return this.service.getClases().subscribe(cl => this.clases = cl);
  }
  ngOnInit() {
    this.getClases();
  }

}


