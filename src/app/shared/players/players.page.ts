import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { JugadoresService } from 'src/app/services/jugadores.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  logo: string = environment.logo
  newPlayer: string = ''
  jugadores!: any[];
  is_jugadores: boolean = true

  constructor(
    private jugadoresService: JugadoresService,
    private router: Router
  ) {
  }

  ngOnInit() {
    localStorage.clear
    this.jugadores = this.jugadoresService.getJugadores();
  }

  //TODO
  /* 
    Realizar pruebas cuando se regresa y todo 
  */

  addPlayer(){
    if (this.newPlayer.trim() !== '') {
      this.jugadoresService.addJugador(this.newPlayer);
      this.newPlayer = ''; // Limpia el campo de entrada después de agregar
      this.jugadores = this.jugadoresService.getJugadores(); // Actualiza la lista de jugadores
      this.is_jugadores = false
    }
  }

  save(){
    localStorage.clear()
    const j = JSON.stringify(this.jugadores)
    localStorage.setItem('jugadores', j)
    this.router.navigate(['/siete-toma-todo'])
  }

  /* editarJugador(id: number) {
    //TODO
    // Implementar la navegación a la página de edición (o modal)
    // pasar el ID del jugador como parámetro si es necesario
    // futura actualización
  } */
  
  eliminarJugador(id: number) {
    this.jugadoresService.deleteJugador(id);
    this.jugadores = this.jugadoresService.getJugadores(); // Actualiza la lista de jugadores después de eliminar
    if(this.jugadores.length === 0){
      this.is_jugadores = true
    }
  }

  back(){
    this.jugadores = []
    this.is_jugadores = true
    this.router.navigate(['/game-mode'])
  }

}
