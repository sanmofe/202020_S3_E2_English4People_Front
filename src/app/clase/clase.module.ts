import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseListComponent } from './clase-list/clase-list.component;

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClaseListComponent],
  exports:  [ClaseListComponent]
})
export class ClaseModule { }
