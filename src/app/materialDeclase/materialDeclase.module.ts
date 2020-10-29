import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDeclaseListComponent } from './materialDeClase-list/materialDeClase-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaterialDeclaseListComponent],
  exports: [MaterialDeclaseListComponent]
})
export class MaterialDeclaseModule { }
