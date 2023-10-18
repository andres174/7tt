import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {

  @Input() valor: any;

  constructor() { }

  ngOnInit() { }

  getRule() {
    switch (this.valor) {
      case 1:

        return 'Venganza o comodín, al final del juego'
      case 2:

        return 'La persona a la que le sale la carta toma'
      case 3:

        return 'Yo nunca nunca con 3 dedos'
      case 4:

        return 'Toma el ultimo que se toque la nariz'
      case 5:

        return 'Al brinco (toma el siguiente)'
      case 6:

        return 'Al que observes (toma el que mires)'
      case 7:

        return 'Toman todos menos al que le sale'
      case 8:

        return 'Toma el último que levante la mano'
      case 9:

        return 'Toma el primero que se mueve'
      case 10:

        return 'Toma el último que se pone de pie'
      case 11:

        return 'Toma el de la izquierda'
      case 12:

        return 'Toma el de la derecha'
      case 13:

        return 'Toma el del frente'
      default:

        return 'Ocurrió un error con la regla'
    }
  }

}
