import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorDetailComponent} from './profesor-detail/profesor-detail.component';
import { ProfesorCreateComponent} from './profesor-create/profesor-create.component';
import { ProfesorRoutingModule} from './profesor-routing.module';
import { CertificadoComponent} from './certificado/certificado.component';

@NgModule({
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfesorListComponent, ProfesorDetailComponent,ProfesorCreateComponent,CertificadoComponent],
  exports: [ProfesorListComponent,ProfesorCreateComponent]
})
export class ProfesorModule { }
