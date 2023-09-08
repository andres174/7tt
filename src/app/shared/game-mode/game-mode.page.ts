import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.page.html',
  styleUrls: ['./game-mode.page.scss'],
})
export class GameModePage implements OnInit {

  logo: string = environment.logo
  is_7tt_select: boolean = false;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  play(){
    if(this.is_7tt_select){
      this.router.navigate(['/players'])
      setTimeout(() => {
        this.is_7tt_select = false
      }, 200)
    } else{
      this.noPlay()
    }
  }
  async noPlay(){
    const toast = await this.toastController.create({
      message: 'Selecciona una opción para continuar.',
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  async callFeedback(){
    const toast = await this.toastController.create({
      message: 'Función en desarrollo.',
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  select(){
    this.is_7tt_select = !this.is_7tt_select
    console.log(this.is_7tt_select);
  }

  //TODO
  /* 
    Ver lo del ngstyle para cuando está seleccionado el btn o no para dar el salto hacia la siguiente pantalla
    
  */

}
