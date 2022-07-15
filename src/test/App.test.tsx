import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Search');
  expect(linkElement).toBeInTheDocument();
});
