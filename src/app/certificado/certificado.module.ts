import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificadoListComponent } from './certificado-list/certificado-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CertificadoListComponent],
  exports:[CertificadoListComponent]
})
export class CertificadoModule { }
