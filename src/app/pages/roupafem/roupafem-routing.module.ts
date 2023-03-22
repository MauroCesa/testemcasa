import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoupafemPage } from './roupafem.page';

const routes: Routes = [
  {
    path: '',
    component: RoupafemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoupafemPageRoutingModule {}
