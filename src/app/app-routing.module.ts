import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorListComponent } from './profesor/profesor-list/profesor-list.component';
import { ProfesorDetailComponent } from "./profesor/profesor-detail/profesor-detail.component";
import { ProfesorCreateComponent } from "./profesor/profesor-create/profesor-create.component";


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
