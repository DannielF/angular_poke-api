import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <nav>
        <Link to="/pokemon-list">Pokemon List</Link> |{' '}
        <Link to="/search">Search</Link>
      </nav>
    </>
  );
};
