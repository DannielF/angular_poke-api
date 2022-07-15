import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { ResponsePokemonSearch } from '../models/ResponsePokemonSearch.model';

export default function PokemonDetails() {
  const { pokemonName } = useParams<string>();
  const [pokemon, setPokemon] = React.useState<ResponsePokemonSearch>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
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
  }, [pokemonName]);

  return (
    <>
      <Menu />
      <h1 className="text-center my-5 font-semibold">Pokemon Details</h1>
      {pokemon?.name && (
        <>
          <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer my-10 mx-auto">
            {' '}
            <div className="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500">
              {' '}
              <div
                className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${pokemon?.sprites.front_default})`,
                }}
              ></div>{' '}
            </div>{' '}
            <div className="p-4 border-t border-gray-200">
              {' '}
              <div className="flex items-center justify-center">
                {' '}
                <h1 className="text-orange-600 font-medium text-lg">
                  {pokemon?.name.charAt(0).toUpperCase() +
                    pokemon?.name.slice(1)}
                </h1>{' '}
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                {pokemon?.types.map((list, index) => (
                  <p
                    key={index}
                    className="font-medium bg-indigo-800 text-slate-300 rounded"
                  >
                    {list.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="mr-3 font-medium">Shiny Sprite</h2>
              <div
                className="w-32 h-32 bg-gray-100 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${pokemon?.sprites.front_shiny})`,
                }}
              ></div>
            </div>
            <button
              type="button"
              onClick={() => {
                navigate('/pokemon-list');
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5"
            >
              Return to the list
            </button>
          </div>
        </>
      )}
    </>
  );
}
