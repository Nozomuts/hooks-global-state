import { ActionTypes, PokeData } from './types';

const setPokemons = (pokemons: PokeData[]) => ({
  type: ActionTypes.setPokemons,
  payload: pokemons,
});

const getPokemons = () => {};
