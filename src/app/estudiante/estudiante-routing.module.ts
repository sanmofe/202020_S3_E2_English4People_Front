import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { EstudianteDetailComponent } from './estudiante-detail/estudiante-detail.component';


const routes: Routes = [{
  path: 'estudiantes',
  children: [
    {
      path: 'list',
      component: EstudianteListComponent
    },
    {
      path: ':id',
      component: EstudianteDetailComponent,
      runGuardsAndResolvers: 'always'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
