import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ShuffleService } from 'src/app/services/shuffle.service';

@Component({
  selector: 'app-siete-toma-todo',
  templateUrl: './siete-toma-todo.page.html',
  styleUrls: ['./siete-toma-todo.page.scss'],
})
export class SieteTomaTodoPage implements OnInit {

  jugadores!: any[] 

  baraja = [
    'As de Corazones', '2 de Corazones', '3 de Corazones', '4 de Corazones'
  ];

  usuarios = [/* 'Usuario 1', 'Usuario 2', 'Usuario 3', 'Usuario 4' */];

  constructor(
    private shuffleService: ShuffleService
  ) {
    this.jugadores = JSON.parse(localStorage.getItem('jugadores')!)
    
  }

  ngOnInit() {
    
    this.initGame()
  }

  /* initGame(){

    const usuarios = this.jugadores.map((jugador) => jugador.nombre);
    this.baraja = this.shuffleService.shuffleArray(this.baraja)
    const cartasAsignadas: Record<string, string> = {};
    
    for (const usuario of usuarios) {
      const cartaAsignada = this.baraja.pop(); // Obtener la última carta de la lista barajeada
      if (cartaAsignada) {
        cartasAsignadas[usuario] = cartaAsignada;
      }
    }

    for (const usuario in cartasAsignadas) {
      console.log(`${usuario}: ${cartasAsignadas[usuario]}`);
    }
  } */

  initGame() {
    const usuarios = this.jugadores.map((jugador) => jugador.nombre);
    this.baraja = this.shuffleService.shuffleArray(this.baraja);
    const cartasAsignadas: Record<string, string[]> = {};
  
    // Inicializa un objeto para llevar un registro de las cartas asignadas a cada jugador
    usuarios.forEach((usuario) => (cartasAsignadas[usuario] = []));
  
    for (let i = 0; i < this.baraja.length; i++) {
      const usuario = usuarios[i % usuarios.length]; // Avanza al siguiente jugador
      const cartaAsignada = this.baraja[i];
      cartasAsignadas[usuario].push(cartaAsignada);
    }
  
    // Ver las cartas asignadas a cada jugador
    for (const usuario in cartasAsignadas) {
      console.log(`${usuario}: ${cartasAsignadas[usuario].join(', ')}`);
    }
  }



}
