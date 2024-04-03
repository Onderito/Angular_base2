import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
