import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ResponseAllPokemons } from '../models/responseAllPokemons.model';
import { ResponsePokemonForm } from '../models/responsePokemonForm.model';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  getPokemons(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<ResponseAllPokemons>(this.apiUrl, { params });
  }

  getPokemon(id: number) {
    return this.http.get<ResponsePokemonForm>(`${this.apiUrl}-form/${id}`);
  }
}
