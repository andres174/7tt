import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SieteTomaTodoPage } from './siete-toma-todo.page';

const routes: Routes = [
  {
    path: '',
    component: SieteTomaTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SieteTomaTodoPageRoutingModule {}
