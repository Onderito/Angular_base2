import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor() {}

  getCocktails(): Cocktail[] {
    return [
      {
        name: 'Mojito',
        price: 8.99,
        image: 'assets/mojito.jpg',
      },
      {
        name: 'Cosmopolitan',
        price: 9.99,
        image: 'assets/cosmopolitan.jpg',
      },
      {
        name: 'Martini',
        price: 7.99,
        image: 'assets/martini.jpg',
      },
      // Ajoutez d'autres cocktails si nécessaire
    ];
  }
}
