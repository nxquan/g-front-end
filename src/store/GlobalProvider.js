
import {GlobalContext} from './GlobalContext'
import { useReducer } from 'react';
import {initState, reducer} from './reducer'

export const GlobalProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}