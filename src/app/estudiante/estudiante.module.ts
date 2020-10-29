import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstudianteListComponent],
  exports: [EstudianteListComponent]
})
export class EstudianteModule { }
