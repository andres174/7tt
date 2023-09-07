import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  main_logo: string = environment.logo

  constructor(
    private router: Router
  ) {}
  //TODO
  /* 
    Ver el tema de cuando carga o no la imagen
  */
  play(){
    this.router.navigate(['game-mode'])
  }

}
