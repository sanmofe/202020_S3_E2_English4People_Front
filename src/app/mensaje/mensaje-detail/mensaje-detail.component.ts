import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeDetail } from '../mensajeDetail';

@Component({
  selector: 'app-mensaje-detail',
  templateUrl: './mensaje-detail.component.html',
  styleUrls: ['./mensaje-detail.component.css']
})
export class MensajeDetailComponent implements OnInit {

  @Input() mensajeDetail: MensajeDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.mensajeDetail.id);
  }

}
