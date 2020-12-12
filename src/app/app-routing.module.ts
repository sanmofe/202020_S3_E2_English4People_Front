import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorListComponent } from './profesor/profesor-list/profesor-list.component';
import { ProfesorDetailComponent } from "./profesor/profesor-detail/profesor-detail.component";
import { ProfesorCreateComponent } from "./profesor/profesor-create/profesor-create.component";
import { EstudianteListComponent } from './estudiante/estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from "./estudiante/estudiante-detail/estudiante-detail.component";
import { EstudianteCreateComponent } from "./estudiante/estudiante-create/estudiante-create.component";
import { ContratoCreateComponent } from "./contrato/contrato-create/contrato-create.component";
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { ActividadListComponent } from './actividad/actividad-list/actividad-list.component';
import { IdiomaCreateComponent } from './idioma/idioma-create/idioma-create.component';
import { IdiomaListarComponent } from './idioma/idioma-listar/idioma-listar.component';
import { DiaSemanaCreateComponent } from './diaSemana/diaSemana-create/diaSemana-create.component';
import { DiaSemanaListarComponent } from './diaSemana/diaSemana-listar/diaSemana-listar.component';
import { ActividadCreateComponent } from './actividad/actividad-create/actividad-create.component';
import { CalificacionCreateComponent } from './calificacion/calificacion-create/calificacion-create.component';
import { CalificacionListaComponent } from './calificacion/calificacion-lista/calificacion-lista.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ClaseCreateComponent } from './clase/clase-create/clase-create.component';
import { ClaseListComponent } from './clase/clase-list/clase-list.component';
import { ContratoListComponent } from './contrato/contrato-list/contrato-list.component';
import { MaterialDeclase } from './materialDeclase/materialDeClase';
import { MensajeListComponent } from './mensaje/mensaje-list/mensaje-list.component';
import { RespuestaListaComponent } from './respuesta/respuesta-lista/respuesta-lista.component';

const routes: Routes = [

  {
    path: 'profesores',
    children: [
      {
        path: 'list',
        component: ProfesorListComponent
      },
      {
        path: 'create',
        component: ProfesorCreateComponent
      },
      {
        path: ':id',
        component: ProfesorDetailComponent
      }
    ]
  },
  {
    path: 'estudiantes',
    children: [
      {
        path: 'list',
        component: EstudianteListComponent
      },
      {
        path: 'create',
        component: EstudianteCreateComponent
      },
      {
        path: ':id',
        component: EstudianteDetailComponent
      }
    ]
  },
  {
    path: 'contratos',
    children: [
      {
        path: 'create',
        component: ContratoCreateComponent
      },
      {
        path: 'list',
        component: ContratoListComponent
      }
    ]
  },
  {
    path: 'actividades',
    children: [
      {
        path: 'create',
        component: ActividadCreateComponent
      },
      {
        path: 'list',
        component: ActividadListComponent
      }
    ]
  },
  {
    path: 'calificaciones',
    children: [
      {
        path: 'create',
        component: CalificacionCreateComponent
      },
      {
        path: 'list',
        component: CalificacionListaComponent
      }
    ]
  },
  {
    path: 'chats',
    children: [
      {
        path: 'list',
        component: ChatListComponent
      }
    ]
  },
  {
    path: 'clases',
    children: [
      {
        path: 'create',
        component: ClaseCreateComponent
      },
      {
        path: 'list',
        component: ClaseListComponent
      }
    ]
  },
  {
    path: 'diasSemana',
    children: [
      {
        path: 'create',
        component: DiaSemanaCreateComponent
      },
      {
        path: 'list',
        component: DiaSemanaListarComponent
      }
    ]
  },
  {
    path: 'horarios',
    children: [
      {
        path: 'list',
        component: HorarioListComponent
      }
    ]
  },
  {
    path: 'idiomas',
    children: [
      {
        path: 'create',
        component: IdiomaCreateComponent
      },
      {
        path: 'list',
        component: IdiomaListarComponent
      }
    ]
  },
  {
    path: 'mensajes',
    children: [
      {
        path: 'list',
        component: MensajeListComponent
      }
    ]
  },
  {
    path: 'respuestas',
    children: [
      {
        path: 'list',
        component: RespuestaListaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
