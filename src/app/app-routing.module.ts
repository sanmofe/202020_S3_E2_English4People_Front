import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorListComponent } from './profesor/profesor-list/profesor-list.component';
import { ProfesorDetailComponent } from "./profesor/profesor-detail/profesor-detail.component";
import { ProfesorCreateComponent } from "./profesor/profesor-create/profesor-create.component";
import { EstudianteListComponent } from './estudiante/estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from "./estudiante/estudiante-detail/estudiante-detail.component";
import { EstudianteCreateComponent } from "./estudiante/estudiante-create/estudiante-create.component";
import { HorarioListComponent } from './horario/horario-list/horario-list.component';
import { ActividadListComponent } from './actividad/actividad-list/actividad-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
