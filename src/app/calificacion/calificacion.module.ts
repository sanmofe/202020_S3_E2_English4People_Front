import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListaComponent } from './calificacion-lista/calificacion-lista.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionListaComponent],
  exports: [CalificacionListaComponent]
})
export class CalificacionModule { }
