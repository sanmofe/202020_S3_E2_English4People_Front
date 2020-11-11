import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListaComponent } from './calificacion-lista/calificacion-lista.component'
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionListaComponent, CalificacionDetailComponent],
  exports: [CalificacionListaComponent]
})
export class CalificacionModule { }
