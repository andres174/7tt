import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  constructor() { }

  
  shuffleArray(array: any[]) {
    // Implementa un algoritmo de barajear (shuffle) como Fisher-Yates.
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

}
