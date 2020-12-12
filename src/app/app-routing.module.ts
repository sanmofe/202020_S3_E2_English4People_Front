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
    path: 'horarios',
    children: [
      {
        path: 'list',
        component: HorarioListComponent
      }
    ]
  },
  {
    path: 'actividades',
    children: [
      {
        path: 'list',
        component: ActividadListComponent
      }
    ]
  },
  {
    path: 'contratos',
    children: [
      {
        path: 'create',
        component: ContratoCreateComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
