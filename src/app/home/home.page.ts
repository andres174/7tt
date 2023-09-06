import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  main_logo: string = '././assets/logo/logo.svg'

  constructor() {}

  //TODO
  /* 
    Ver el tema de cuando carga o no la imagen
  */

  play(){
    console.log("Jugar");
  }

}
