import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfesorListComponent],
  exports: [ProfesorListComponent]
})
export class ProfesorModule { }
