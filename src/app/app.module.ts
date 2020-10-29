import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {ProfesorModule} from './profesor/profesor.module';
import {CertificadoModule} from './certificado/certificado.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratoModule } from './contrato/contrato.module';
import { HorarioModule } from './horario/horario.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { RespuestaModule } from './respuesta/respuesta.module'
import { IdiomaModule } from './idioma/idioma.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfesorModule,
    CertificadoModule,
    ContratoModule,
    HorarioModule,
    IdiomaModule,
    CalificacionModule,
    RespuestaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
