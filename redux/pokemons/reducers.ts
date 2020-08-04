import { PokemonsAction, ActionTypes, PokeState } from './types';

export const initialState: PokeState = {
  pokemons: [],
  errorMessage: '',
};

export const reducer = (state: PokeState, action: PokemonsAction) => {
  switch (action.type) {
    case ActionTypes.fetchPokemons:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
