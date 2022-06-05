import { Component, OnInit } from '@angular/core';

import { ResponseAllPokemons } from 'src/app/models/responseAllPokemons.model';
import { ResponsePokemonForm } from 'src/app/models/responsePokemonForm.model';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'poke-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss'],
})

/**
 * PokeInfoComponent is the component that shows all the pokemons.
 * @author Daniel Granados
 * @version 0.0.1
 * @since 0.0.1
 */
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

  /**
   * Toggle the poke details.
   */
  togglePokeDetails() {
    this.pokeDetails = !this.pokeDetails;
  }

  /**
   * Get the details of a pokemon by its id.
   * @param id number
   */
  getPokemonDetails(id: number) {
    this.pokeService.getPokemon(id).subscribe((data) => {
      this.pokemonChosen = data;
    });
    this.togglePokeDetails();
  }

  /**
   * Show the next page of pokemons.
   */
  loadMorePokemons() {
    this.pokeService.getPokemons(this.limit, this.offset).subscribe((data) => {
      this.pokemons.results = [...this.pokemons.results, ...data.results];
    });
    this.offset += this.limit;
  }
}
