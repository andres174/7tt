import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasComponent } from './cartas/cartas.component';
import { RulesComponent } from './rules/rules.component';
import { SocialsComponent } from './socials/socials.component';



@NgModule({
  declarations: [
    CartasComponent,
    RulesComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartasComponent,
    RulesComponent,
    SocialsComponent
  ]
})
export class ComponentsModule { }
