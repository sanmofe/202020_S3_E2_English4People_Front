import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RespuestaListaComponent } from './respuesta-lista/respuesta-lista.component';
import { RespuestaDetailComponent } from "./respuesta-detail/respuesta-detail.component"
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RespuestaListaComponent, RespuestaDetailComponent],
  exports: [RespuestaListaComponent]
})
export class RespuestaModule { }
