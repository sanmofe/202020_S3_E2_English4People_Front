import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from './estudiante-detail/estudiante-detail.component';
import { EstudianteCreateComponent} from './estudiante-create/estudiante-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EstudianteListComponent, EstudianteDetailComponent, EstudianteCreateComponent],
  exports: [EstudianteListComponent, EstudianteDetailComponent, EstudianteCreateComponent]
})
export class EstudianteModule { }
