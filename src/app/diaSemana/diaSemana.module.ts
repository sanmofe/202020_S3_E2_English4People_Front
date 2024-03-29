import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaSemanaListarComponent } from './diaSemana-listar/diaSemana-listar.component';
import { DiaSemanaDetailComponent } from './diaSemana-detail/diaSemana-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiaSemanaCreateComponent } from './diaSemana-create/diaSemana-create.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [DiaSemanaListarComponent, DiaSemanaDetailComponent, DiaSemanaCreateComponent],
  exports: [DiaSemanaListarComponent, DiaSemanaCreateComponent]
})
export class DiaSemanaModule { }
