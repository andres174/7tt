import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss'],
  animations: [
    trigger('cartaFade', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', animate('300ms ease-in')),
      transition('* => void', animate('300ms ease-out'))
    ])
  ]
})
export class CartasComponent  implements OnInit {

  @Input() carta: any

  constructor() { }

  ngOnInit() {
  }

  getValorAMostrar(): string {
    switch (this.carta.valor) {
      case 1:
        return 'A';
      case 11:
        return 'J';
      case 12:
        return 'Q';
      case 13:
        return 'K';
      default:
        return this.carta.valor.toString();
    }
  }

  esRoja(): boolean {
    return this.carta.v_palo === 1 || this.carta.v_palo === 2;
  }



}
