import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDeClaseListComponent } from './materialDeClase-list/materialDeClase-list.component';
import { MaterialDeClaseDetailComponent } from './materialDeClase-Detail/materialDeClase-Detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MaterialDeClaseListComponent, MaterialDeClaseDetailComponent],
  exports: [ MaterialDeClaseListComponent]
})
export class MaterialDeclaseModule { }
