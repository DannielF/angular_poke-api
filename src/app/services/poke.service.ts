import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ResponseAllPokemons } from '../models/responseAllPokemons.model';
import { ResponsePokemonForm } from '../models/responsePokemonForm.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<ResponseAllPokemons>(this.apiUrl);
  }

  getPokemon(id: number) {
    return this.http.get<ResponsePokemonForm>(`${this.apiUrl}-form/${id}`);
  }
}
