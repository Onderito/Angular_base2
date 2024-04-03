import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';
import { CommonModule } from '@angular/common';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  // Injection de la dépendance CocktailService
  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktail().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }

  // Méthode sans Observable
  // ngOnInit() {
  //   this.cocktails = this.cocktailService.getCocktails();
  // }
}
