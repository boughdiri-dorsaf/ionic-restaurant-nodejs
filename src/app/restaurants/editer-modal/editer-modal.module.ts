import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditerModalPageRoutingModule } from './editer-modal-routing.module';

import { EditerModalPage } from './editer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditerModalPageRoutingModule
  ],
  declarations: [EditerModalPage]
})
export class EditerModalPageModule {}
