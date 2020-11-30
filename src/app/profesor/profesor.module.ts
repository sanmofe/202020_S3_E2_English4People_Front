import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorDetailComponent} from './profesor-detail/profesor-detail.component';
import { ProfesorCreateComponent} from './profesor-create/profesor-create.component';
import { CertificadoComponent} from './certificado/certificado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfesorListComponent, ProfesorDetailComponent,ProfesorCreateComponent,CertificadoComponent],
  exports: [ProfesorListComponent, ProfesorDetailComponent, ProfesorCreateComponent]
})
export class ProfesorModule { }
