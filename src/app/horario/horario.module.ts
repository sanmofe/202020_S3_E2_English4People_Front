import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioListComponent } from './horario-list/horario-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorarioListComponent],
  exports: [HorarioListComponent]
})
export class HorarioModule { }
