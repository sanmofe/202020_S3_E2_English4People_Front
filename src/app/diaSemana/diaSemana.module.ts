import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaSemanaListarComponent } from './diaSemana-listar/diaSemana-listar.component';
import { DiaSemanaDetailComponent } from './diaSemana-detail/diaSemana-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiaSemanaListarComponent, DiaSemanaDetailComponent],
  exports: [DiaSemanaListarComponent]
})
export class DiaSemanaModule { }
