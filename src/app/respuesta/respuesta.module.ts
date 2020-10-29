import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaListaComponent } from './respuesta-lista/respuesta-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RespuestaListaComponent],
  exports: [RespuestaListaComponent]
})
export class RespuestaModule { }
