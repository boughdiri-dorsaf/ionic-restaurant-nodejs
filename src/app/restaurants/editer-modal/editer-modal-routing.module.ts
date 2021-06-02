import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditerModalPage } from './editer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditerModalPageRoutingModule {}
