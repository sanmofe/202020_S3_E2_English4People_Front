import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Respuesta } from '../respuesta';
import { RespuestaService } from '../respuesta.service';

@Component({
  selector: 'app-respuesta-lista',
  templateUrl: './respuesta-lista.component.html',
  styleUrls: ['./respuesta-lista.component.css']
})
export class RespuestaListaComponent implements OnInit {

  constructor(private respuestaService: RespuestaService) { }

  respuestas: Array<Respuesta>;

  getRespuestas(): void {
    this.respuestaService.getRespuestas()
      .subscribe(respuestas => {
        this.respuestas = respuestas;
      });
  }

  ngOnInit() {
    this.getRespuestas();
  }

}