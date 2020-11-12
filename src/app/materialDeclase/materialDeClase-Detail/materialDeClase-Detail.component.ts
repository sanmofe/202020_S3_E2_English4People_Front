import { Component, OnInit, Input } from '@angular/core';
import { MaterialDeclase } from '../materialDeClase';


@Component({
  selector: 'app-materialDeClase-Detail',
  templateUrl: './materialDeClase-Detail.component.html',
  styleUrls: ['./materialDeClase-Detail.component.css']
})
export class MaterialDeClaseDetailComponent implements OnInit {

  @Input() materialDeClaseDetail: MaterialDeclase;

  constructor() { }

  ngOnInit() {
    console.log(this.materialDeClaseDetail.id);
  }

}
