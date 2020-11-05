import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratoListComponent } from './contrato-list/contrato-list.component';
import { ContratoDetailComponent } from './contrato-detail/contrato-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContratoListComponent, ContratoDetailComponent],
  exports: [ContratoListComponent]
})
export class ContratoModule { }
