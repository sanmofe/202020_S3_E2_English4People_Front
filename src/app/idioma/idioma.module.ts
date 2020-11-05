import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaListarComponent } from './idioma-listar/idioma-listar.component';
import { IdiomaDetailComponent } from './idioma-detail/idioma-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IdiomaListarComponent, IdiomaDetailComponent],
  exports: [IdiomaListarComponent]
})
export class IdiomaModule { }
