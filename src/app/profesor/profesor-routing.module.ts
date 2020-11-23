import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorDetailComponent } from './profesor-detail/profesor-detail.component';


const routes: Routes = [{
  path: 'profesores',
  children: [
    {
      path: 'list',
      component: ProfesorListComponent
    },
    {
      path: ':id',
      component: ProfesorDetailComponent,
      runGuardsAndResolvers: 'always'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
