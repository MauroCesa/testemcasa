import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoupamascPage } from './roupamasc.page';

const routes: Routes = [
  {
    path: '',
    component: RoupamascPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoupamascPageRoutingModule {}
