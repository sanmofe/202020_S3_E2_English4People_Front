import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeListComponent } from './mensaje-list/mensaje-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MensajeListComponent],
  exports: [MensajeListComponent]
})
export class MensajeModule { }
