import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorListComponent } from './profesor/profesor-list/profesor-list.component';

const routes: Routes = [
  { path: '', component: ProfesorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
