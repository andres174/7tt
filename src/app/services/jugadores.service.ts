import { Injectable } from '@angular/core';
import { Jugador } from '../class/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  private jugadores: Jugador[] = []
  
  constructor() { }

  getJugadores(): Jugador[]{
    return this.jugadores
  }

  addJugador(nombre: string){
    const id = this.jugadores.length + 1
    const jugador = new Jugador(id, nombre)
    this.jugadores.push(jugador)
  }

  deleteJugador(id: number){
    this.jugadores = this.jugadores.filter((jugador) => jugador.id !== id)
  }

  editJugador(id: number, nuevo_nombre: string){
    const jugadorIndex = this.jugadores.findIndex((jugador) => jugador.id === id)
    if(jugadorIndex !== -1){
      this.jugadores[jugadorIndex].nombre = nuevo_nombre
    }
  }

  deleteAll(){
    this.jugadores = []
  }

}
