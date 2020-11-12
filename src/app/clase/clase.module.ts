import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseListComponent } from './clase-list/clase-list.component';
import { ClaseDetailComponent } from './clase-detail/clase-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClaseListComponent, ClaseDetailComponent ],
  exports:  [ClaseListComponent]
})
export class ClaseModule { }
