import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-siete-toma-todo',
  templateUrl: './siete-toma-todo.page.html',
  styleUrls: ['./siete-toma-todo.page.scss'],
})
export class SieteTomaTodoPage implements OnInit {

  jugadores!: any[] 

  constructor(
    
  ) {
    this.jugadores = JSON.parse(localStorage.getItem('jugadores')!)
  }

  ngOnInit() {
  }

}
