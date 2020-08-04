import { PokemonsAction } from './types';
import { initialState } from '../store';

export const reducer = (state = initialState, action: PokemonsAction) => {
  switch (action.type) {
    case 'SET_POKEMONS':

    default:
      return state;
  }
};
