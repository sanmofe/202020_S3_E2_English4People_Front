import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContratoListComponent } from './contrato-list/contrato-list.component';
import { ContratoDetailComponent } from './contrato-detail/contrato-detail.component';
import { ContratoCreateComponent } from './contrato-create/contrato-create.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ContratoListComponent, ContratoDetailComponent, ContratoCreateComponent],
  exports: [ContratoListComponent, ContratoCreateComponent]
})
export class ContratoModule { }
