import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  imgOfTheDay!: string;
  private nasa = inject(NasaService);

  ngOnInit(): void {
    this.nasa.getImageOfTheDay().subscribe((data) => {
      this.imgOfTheDay = data.url;
    });
  }
}
