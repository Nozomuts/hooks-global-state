import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './pokemons/reducers';

export const stateContext = createContext(initialState);
export const dispatchContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useDispatch = () => {
  return useContext(dispatchContext);
};

export const useGrobalState = (property) => {
  const state = useContext(stateContext);
  return state[property];
};
