import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {  ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadDetailComponent } from '../actividad/actividad-detail/actividad-detail.component';
import { ActividadCreateComponent } from "./actividad-create/actividad-create.component";
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ActividadListComponent, ActividadDetailComponent,ActividadCreateComponent ],
  exports: [ActividadListComponent, ActividadCreateComponent]
})
export class ActividadModule { }
