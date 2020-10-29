import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EstudianteModule}  from './estudiante/estudiante.module';
import { MensajeModule } from './mensaje/mensaje.module'
import { ChatModule } from './chat/chat.module'
import {ProfesorModule} from './profesor/profesor.module';
import {CertificadoModule} from './certificado/certificado.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContratoModule } from './contrato/contrato.module';
import { HorarioModule } from './horario/horario.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { RespuestaModule } from './respuesta/respuesta.module'
import { IdiomaModule } from './idioma/idioma.module';
import { DiaSemanaModule } from './diaSemana/diaSemana.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EstudianteModule,
    ChatModule,
    MensajeModule,
    AppRoutingModule,
    ProfesorModule,
    CertificadoModule,
    ContratoModule,
    HorarioModule,
    IdiomaModule,
    CalificacionModule,
    RespuestaModule,
    DiaSemanaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
