import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasComponent } from './cartas/cartas.component';
import { RulesComponent } from './rules/rules.component';



@NgModule({
  declarations: [
    CartasComponent,
    RulesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartasComponent,
    RulesComponent
  ]
})
export class ComponentsModule { }
