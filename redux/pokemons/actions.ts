import { ActionTypes, PokeData } from './types';
import axios from 'axios';

export const fetchPokemons = async () => {
  let pokemons: PokeData[] = [];
  let errorMessage: string = '';

  await axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then((res) => {
      pokemons = res.data.results;
    })
    .catch((err) => {
      errorMessage = err;
    });
  console.log(pokemons)
  return {
    type: ActionTypes.fetchPokemons,
    payload: {
      errorMessage: errorMessage,
      pokemons: pokemons,
    },
  };
};
