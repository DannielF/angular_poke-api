import { Component, OnInit } from '@angular/core';

import { ResponseAllPokemons } from 'src/app/models/responseAllPokemons.model';
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

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }
}
