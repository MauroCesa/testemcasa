import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoupafemPageRoutingModule } from './roupafem-routing.module';

import { RoupafemPage } from './roupafem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoupafemPageRoutingModule
  ],
  declarations: [RoupafemPage]
})
export class RoupafemPageModule {}
