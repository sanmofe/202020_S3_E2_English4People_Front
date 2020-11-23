import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorDetailComponent} from './profesor-detail/profesor-detail.component';
import { ProfesorRoutingModule} from './profesor-routing.module';
import { CertificadoComponent} from './certificado/certificado.component';

@NgModule({
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ],
  declarations: [ProfesorListComponent, ProfesorDetailComponent,CertificadoComponent],
  exports: [ProfesorListComponent]
})
export class ProfesorModule { }
