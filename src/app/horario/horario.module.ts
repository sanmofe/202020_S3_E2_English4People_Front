import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioListComponent } from './horario-list/horario-list.component';
import { HorarioDetailComponent } from './horario-detail/horario-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorarioListComponent, HorarioDetailComponent],
  exports: [HorarioListComponent]
})
export class HorarioModule { }
