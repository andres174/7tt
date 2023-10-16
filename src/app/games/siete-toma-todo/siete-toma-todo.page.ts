import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Carta } from 'src/app/class/carta';
import { ShuffleService } from 'src/app/services/shuffle.service';

@Component({
  selector: 'app-siete-toma-todo',
  templateUrl: './siete-toma-todo.page.html',
  styleUrls: ['./siete-toma-todo.page.scss'],
})
export class SieteTomaTodoPage implements OnInit {

  jugadores!: any[]
  cartas = new Carta()
  baraja: any[] = this.cartas.baraja
  juego: any[] = []

  index_act: number = 0
  turno_act: any;

  constructor(
    private shuffleService: ShuffleService
  ) {
    this.jugadores = JSON.parse(localStorage.getItem('jugadores')!)

  }

  ngOnInit() {
    this.initGame()
  }


  initGame() {
    const usuarios = this.jugadores.map((jugador) => jugador.nombre);
    console.log(usuarios);
    this.baraja = this.shuffleService.shuffleArray(this.baraja);
    console.log(this.baraja);

    let jugadorIndex = 0

    for (let carta of this.baraja){
      const jugador = usuarios[jugadorIndex]
      this.juego.push({jugador, carta})
      jugadorIndex = (jugadorIndex + 1) % usuarios.length 
    }

    console.log(this.juego);
    
    this.turno_act = this.juego[this.index_act]
  }

  nextTurn(){
    if (this.index_act < this.juego.length - 1) {
      this.index_act++;
      this.turno_act = this.juego[this.index_act];
    }
  }

  prevTurn(){
    if (this.index_act > 0) {
      this.index_act--;
      this.turno_act = this.juego[this.index_act];
    }
  }

  

}
