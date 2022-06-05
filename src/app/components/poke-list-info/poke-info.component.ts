import { Component, OnInit } from '@angular/core';

import { ResponseAllPokemons } from 'src/app/models/responseAllPokemons.model';
import { ResponsePokemonForm } from 'src/app/models/responsePokemonForm.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'poke-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss'],
})
export class PokeInfoComponent implements OnInit {
  pokemons: ResponseAllPokemons = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  pokeDetails: boolean = false;
  pokemonChosen!: ResponsePokemonForm;
  limit: number = 20;
  offset: number = 20;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }

  togglePokeDetails() {
    this.pokeDetails = !this.pokeDetails;
  }

  getPokemonDetails(id: number) {
    this.pokeService.getPokemon(id).subscribe((data) => {
      this.pokemonChosen = data;
    });
    this.togglePokeDetails();
  }

  loadMorePokemons() {
    this.pokeService.getPokemons(this.limit, this.offset).subscribe((data) => {
      this.pokemons.results = [...this.pokemons.results, ...data.results];
    });
    this.offset += this.limit;
  }
}
