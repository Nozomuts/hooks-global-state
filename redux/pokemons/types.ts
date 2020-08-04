export const ActionTypes = {
  setPokemons: 'SET_POKEMONS',
} as const;

export type PokeData = {
  name: string;
  url: string;
};

type SetPokemonsAction = {
  type: typeof ActionTypes.setPokemons;
  payload: PokeData[];
};

export type PokemonsAction = SetPokemonsAction;
