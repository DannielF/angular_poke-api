import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonDetails from '../pages/PokemonDetails';

test('renders pokemon details page', () => {
  render(
    <Router>
      <PokemonDetails />
    </Router>
  );

  const h1 = screen.getByRole('heading', { name: /pokemon details/i });
  expect(h1).toBeInTheDocument();
});
