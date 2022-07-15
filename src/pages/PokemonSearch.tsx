import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { ResponsePokemonSearch } from '../models/ResponsePokemonSearch.model';

export default function PokemonSearch() {
  const [pokeName, setPokeName] = React.useState('');
  const [pokemon, setPokemon] = React.useState<ResponsePokemonSearch>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    })
      .then((res) => res.json())
      .then((data: ResponsePokemonSearch) => {
        setPokemon(data);
      });
  }, [pokeName]);

  const showPokemonDetails = (pokemon: string) => {
    console.log(pokemon);
    navigate(`/pokemon/${pokemon}`);
  };

  return (
    <>
      <Menu />
      <h1 className="text-center my-5 font-semibold">Pokemon Search</h1>
      <input
        onChange={(e) => setPokeName(e.target.value)}
        type="name"
        name="pokeName"
        value={pokeName}
        placeholder="Write the name of the pokemon"
        className="w-full p-2 border border-gray-300 rounded-lg text-center"
      />
      {pokemon?.name && (
        <>
          <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer my-10 mx-auto">
            {' '}
            <div
              className="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500"
              onClick={() => {
                showPokemonDetails(pokemon.name);
              }}
            >
              {' '}
              <div
                className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${pokemon.sprites.front_default})`,
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
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </h1>{' '}
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                {pokemon.types.map((list, index) => (
                  <p
                    key={index}
                    className="font-medium bg-indigo-800 text-slate-300 rounded"
                  >
                    {list.type.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
