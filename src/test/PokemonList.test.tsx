import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonList } from '../pages/PokemonList';

test('renders pokemon list page', () => {
  render(
    <Router>
      <PokemonList />
    </Router>
  );
  const h1 = screen.getByRole('heading', { name: /pokemon list/i });
  expect(h1).toBeInTheDocument();
});
