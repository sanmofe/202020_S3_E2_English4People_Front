import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EstudianteModule}  from './estudiante/estudiante.module';
import { MensajeModule } from './mensaje/mensaje.module'
import { ChatModule } from './chat/chat.module'
import {ProfesorModule} from './profesor/profesor.module';
import { ContratoModule } from './contrato/contrato.module';
import { HorarioModule } from './horario/horario.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { RespuestaModule } from './respuesta/respuesta.module'
import { IdiomaModule } from './idioma/idioma.module';
import { DiaSemanaModule } from './diaSemana/diaSemana.module';
import { ActividadModule } from './actividad/actividad.module';
import { ClaseModule } from './clase/clase.module';
//import { MaterialDeclaseModule } from './materialDeclase/materialDeclase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    EstudianteModule,
    ChatModule,
    MensajeModule,
    AppRoutingModule,
    ProfesorModule,
    ContratoModule,
    HorarioModule,
    IdiomaModule,
    CalificacionModule,
    RespuestaModule,
    DiaSemanaModule,
    ActividadModule,
    ClaseModule
    //MaterialDeclaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
