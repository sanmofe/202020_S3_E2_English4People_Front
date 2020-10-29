import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaSemanaListarComponent } from './diaSemana-listar/diaSemana-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiaSemanaListarComponent],
  exports: [DiaSemanaListarComponent]
})
export class DiaSemanaModule { }
