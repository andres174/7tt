import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SieteTomaTodoPageRoutingModule } from './siete-toma-todo-routing.module';

import { SieteTomaTodoPage } from './siete-toma-todo.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SieteTomaTodoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SieteTomaTodoPage]
})
export class SieteTomaTodoPageModule {}
