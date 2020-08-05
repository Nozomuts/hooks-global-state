import { ActionTypes, PokeData } from './types';
import axios from 'axios';

export const fetchPokemons = (pokemons: PokeData[], errorMessage: string) => ({
  type: ActionTypes.fetchPokemons,
  payload: {
    pokemons: pokemons,
    errorMessage: errorMessage,
  },
});
