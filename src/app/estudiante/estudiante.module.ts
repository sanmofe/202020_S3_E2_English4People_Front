import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from './estudiante-detail/estudiante-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstudianteListComponent, EstudianteDetailComponent],
  exports: [EstudianteListComponent]
})
export class EstudianteModule { }
