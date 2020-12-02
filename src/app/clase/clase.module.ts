import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClaseListComponent } from './clase-list/clase-list.component';
import { ClaseDetailComponent } from './clase-detail/clase-detail.component';
import { ClaseCreateComponent } from './clase-create/clase-create.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ClaseListComponent, ClaseDetailComponent, ClaseCreateComponent ],
  exports:  [ClaseListComponent, ClaseCreateComponent]
})
export class ClaseModule { }
