import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private http = inject(HttpClient);

  constructor() {}

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(
      'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
    );
  }
}
