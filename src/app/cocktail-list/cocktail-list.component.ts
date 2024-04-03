import { Component } from '@angular/core';
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
  cocktails!: Cocktail[];
  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
