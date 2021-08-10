import React, { useReducer } from 'react';

import { reducer, initialState } from 'Utils/Store/reducer';

export const AppContext = React.createContext();

export const ContextWrapper = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
