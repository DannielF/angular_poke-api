import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(this.apiUrl);
  }

  getPokemon(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
