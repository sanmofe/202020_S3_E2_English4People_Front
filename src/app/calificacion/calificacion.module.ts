import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListaComponent } from './calificacion-lista/calificacion-lista.component'
import { CalificacionDetailComponent } from './calificacion-detail/calificacion-detail.component'
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [CalificacionListaComponent, CalificacionDetailComponent, CalificacionCreateComponent],
  exports: [CalificacionListaComponent, CalificacionCreateComponent]
})
export class CalificacionModule { }
