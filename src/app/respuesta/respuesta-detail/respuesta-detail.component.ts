import { Component, OnInit, Input } from '@angular/core';
import { Respuesta } from '../respuesta';

@Component({
  selector: 'app-respuesta-detail',
  templateUrl: './respuesta-detail.component.html',
  styleUrls: ['./respuesta-detail.component.css']
})
export class RespuestaDetailComponent implements OnInit {

  @Input() respuestaDetail: Respuesta;


  constructor() { }

  ngOnInit() {
    console.log(this.respuestaDetail.id);
  }

}
