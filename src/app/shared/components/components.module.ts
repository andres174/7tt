import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasComponent } from './cartas/cartas.component';



@NgModule({
  declarations: [
    CartasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartasComponent
  ]
})
export class ComponentsModule { }
