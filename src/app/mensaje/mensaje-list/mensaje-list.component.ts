import { Component, OnInit } from '@angular/core';
import {Mensaje} from '../mensaje';
import {MensajeServiceService} from '../mensaje-service.service';

@Component({
  selector: 'app-mensaje-list',
  templateUrl: './mensaje-list.component.html',
  styleUrls: ['./mensaje-list.component.css']
})
export class MensajeListComponent implements OnInit {

  constructor(private service: MensajeServiceService) { }
  mensajes: Array<Mensaje>;
  getMensajes(): any{
    return this.service.getMensajes().subscribe(c => this.mensajes = c);
  }
  ngOnInit() {
    this.getMensajes();
    console.log("init");
  }

}
