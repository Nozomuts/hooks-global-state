export const ActionTypes = {
  fetchPokemons: 'FETCH_POKEMONS',
} as const;

export type PokeData = {
  name: string;
  url: string;
};

export type PokeState = {
  pokemons: PokeData[],
  errorMessage: string,
}

type FetchPokemonsAction = {
  type: typeof ActionTypes.fetchPokemons;
  payload: {
    pokemons: PokeData[];
    errorMessage: string;
  };
};

export type PokemonsAction = FetchPokemonsAction;
