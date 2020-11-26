import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaListarComponent } from './idioma-listar/idioma-listar.component';
import { IdiomaDetailComponent } from './idioma-detail/idioma-detail.component';
import { IdiomaCreateComponent } from './idioma-create/idioma-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [IdiomaListarComponent, IdiomaDetailComponent, IdiomaCreateComponent],
  exports: [IdiomaListarComponent, IdiomaCreateComponent]
})
export class IdiomaModule { }
