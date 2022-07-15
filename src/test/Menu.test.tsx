import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from '../components/Menu';

test('render links menu component', () => {
  //Arrange
  render(
    <Router>
      <Menu />
    </Router>
  );
  //Act
  const hrefattribute = screen.getByText('Pokemon List').getAttribute('href');
  const hrefattribute2 = screen.getByText('Search').getAttribute('href');
  //Assert
  expect(hrefattribute).toBe('/pokemon-list');
  expect(hrefattribute2).toBe('/search');
});
