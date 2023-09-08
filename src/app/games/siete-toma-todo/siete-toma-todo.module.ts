import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SieteTomaTodoPageRoutingModule } from './siete-toma-todo-routing.module';

import { SieteTomaTodoPage } from './siete-toma-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SieteTomaTodoPageRoutingModule
  ],
  declarations: [SieteTomaTodoPage]
})
export class SieteTomaTodoPageModule {}
