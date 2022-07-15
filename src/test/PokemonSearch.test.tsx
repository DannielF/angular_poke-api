import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonSearch from '../pages/PokemonSearch';

test('renders pokemonSearch page', () => {
  render(
    <Router>
      <PokemonSearch />
    </Router>
  );
  const input = screen.getByPlaceholderText('Write the name of the pokemon');
  expect(input).toBeInTheDocument();
});

test('Search the pokemon ditto', async () => {
  render(
    <Router>
      <PokemonSearch />
    </Router>
  );

  const inputEl = screen.getByPlaceholderText('Write the name of the pokemon');
  fireEvent.change(inputEl, { target: { value: 'ditto' } });

  const pokemonName = await screen.findByText(/ditto/i);
  expect(pokemonName).toBeInTheDocument();
});
