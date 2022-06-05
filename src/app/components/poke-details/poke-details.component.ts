import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponsePokemonForm } from 'src/app/models/responsePokemonForm.model';

@Component({
  selector: 'poke-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})
export class PokeDetailsComponent implements OnInit {
  @Input() pokemon: ResponsePokemonForm = {
    form_name: '',
    form_names: [],
    form_order: 0,
    id: 0,
    is_battle_only: false,
    is_default: false,
    is_mega: false,
    name: '',
    names: [],
    order: 0,
    pokemon: {
      name: '',
      url: '',
    },
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null,
    },
    types: [],
    version_group: {
      name: '',
      url: '',
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
