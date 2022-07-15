import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { ResponseAllPokemons } from '../models/ResponseAllPokemons.model';

export const PokemonList = () => {
  const [pokemons, setPokemons] = React.useState<ResponseAllPokemons>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data: ResponseAllPokemons) => {
        setPokemons(data);
      });
  }, []);

  const showPokemonDetails = (pokemon: string) => {
    console.log(pokemon);
    navigate(`/pokemon/${pokemon}`);
  };

  return (
    <>
      <Menu />
      <h1 className="text-center my-5 font-semibold">Pokemon List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
        {pokemons?.results.length == 0 && <p>There's no data</p>}
        {pokemons?.results.map((pokemon, index) => (
          <>
            <div
              className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer"
              key={index}
              onClick={() => {
                showPokemonDetails(pokemon.name);
              }}
            >
              {' '}
              <div className="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500">
                {' '}
                <div
                  className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png)`,
                  }}
                >
                  {' '}
                </div>{' '}
              </div>{' '}
              <div className="p-4 border-t border-gray-200">
                {' '}
                <div className="flex items-center justify-center">
                  {' '}
                  <h1 className="text-orange-600 font-medium">
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>{' '}
                  <button className="text-gray-500 hover:text-gray-900">
                    {' '}
                  </button>{' '}
                </div>{' '}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
