import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetails from './pages/PokemonDetails';
import { PokemonList } from './pages/PokemonList';
import PokemonSearch from './pages/PokemonSearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="pokemon-list" element={<PokemonList />} />
        <Route path="search" element={<PokemonSearch />} />
        <Route path="pokemon/:pokemonName" element={<PokemonDetails />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
