import { Component, OnInit } from '@angular/core';
import { MaterialDeclase} from '../materialDeClase';
import { MaterialDeClaseServiceService} from '../materialDeClase-service.service';


@Component({
  selector: 'app-materialDeClase-list',
  templateUrl: './materialDeClase-list.component.html',
  styleUrls: []
})
export class MaterialDeClaseListComponent implements OnInit {

  selectedMaterial: MaterialDeclase;
  selected = false;

  constructor(private service: MaterialDeClaseServiceService) { }

  enlaces: Array<MaterialDeclase>;

  getEnlaces(): any{
    return this.service.getEnlaces().subscribe(mate => this.enlaces = mate);
  }
  ngOnInit() {
    this.getEnlaces();
  }

  onSelected(mate: MaterialDeclase): void {
    this.selected = true;
    this.selectedMaterial = mate;
    console.log(mate);
  }
}




