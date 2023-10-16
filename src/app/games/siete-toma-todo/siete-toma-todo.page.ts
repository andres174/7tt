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

  /* cartasAsignadas: Record<string, any[]> = {}; */

  juego: any[] = []

  constructor(
    private shuffleService: ShuffleService
  ) {
    this.jugadores = JSON.parse(localStorage.getItem('jugadores')!)

  }

  ngOnInit() {
    this.initGame()
    /* console.log(this.cartasAsignadas); */
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

    
    
    // const cartasAsignadas: Record<string, any[]> = {};

    // // Inicializa un objeto para llevar un registro de las cartas asignadas a cada jugador
    // usuarios.forEach((usuario) => (cartasAsignadas[usuario] = []));

    // // Calcular cuántas cartas se asignarán a cada jugador
    // const cartasPorJugador = Math.floor(this.baraja.length / usuarios.length);

    // // Reinicializar el registro de cartas asignadas
    // for (const usuario in cartasAsignadas) {
    //   cartasAsignadas[usuario] = [];
    // }

    // // Asignar cartas a los jugadores
    // for (let i = 0; i < this.baraja.length; i++) {
    //   const usuario = usuarios[i % usuarios.length];
    //   if (cartasAsignadas[usuario].length < cartasPorJugador) {
    //     const cartaAsignada = this.baraja[i];
    //     cartasAsignadas[usuario].push(cartaAsignada);
    //   }
    // }

    // this.cartasAsignadas = cartasAsignadas

    
  }



}
