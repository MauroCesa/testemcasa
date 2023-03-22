import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoupamascPageRoutingModule } from './roupamasc-routing.module';

import { RoupamascPage } from './roupamasc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoupamascPageRoutingModule
  ],
  declarations: [RoupamascPage]
})
export class RoupamascPageModule {}
