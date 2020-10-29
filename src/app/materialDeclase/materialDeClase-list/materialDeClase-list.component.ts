import { Component, OnInit } from '@angular/core';
import { MaterialDeclase, materialDeClase } from '../materialDeClase';
import { MaterialDeClaseServiceService} from '../materialDeClase-service.service';


@Component({
  selector: 'app-materialDeClase-list',
  templateUrl: './materialDeClase-list.component.html',
  styleUrls: ['./materialDeClase-list.component.css']
})
export class MaterialDeClaseListComponent implements OnInit {

  constructor(private service: MaterialDeClaseServiceService) { }
  enlaces: Array<MaterialDeclase>;
  getEnlaces(): any{
    return this.service.getEnlaces().subscribe(c => this.enlaces = c);
  }
  ngOnInit() {
    this.getEnlaces();
  }
}
