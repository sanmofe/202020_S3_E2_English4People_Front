import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaListarComponent } from './idioma-listar/idioma-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IdiomaListarComponent],
  exports: [IdiomaListarComponent]
})
export class IdiomaModule { }
