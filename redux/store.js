import { createContext, useReducer } from 'react';
import { reducer } from './pokemons/reducers';

export const initialState = {
  pokemons: [],
};

const PokemonContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
