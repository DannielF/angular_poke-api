import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResponsePokemonForm } from 'src/app/models/responsePokemonForm.model';

@Component({
  selector: 'poke-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss'],
})

/**
 * PokeDetailsComponent is the component that shows the details of a pokemon given its id.
 * @author Daniel Granados
 * @version 0.0.1
 * @since 0.0.1
 */
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
