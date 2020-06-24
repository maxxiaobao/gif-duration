import React, { useReducer } from 'react';

const initialState = {
  list: []
};

export const UPDATE_LIST = 'UPDATE_LIST';
export const EMPTY_LIST = 'EMPTY_LIST';

const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case UPDATE_LIST:
      return { ...state, list: action.payload };
    case EMPTY_LIST:
      return { ...state, list: [] };
    default:
      return state;
  }
};

export const Store = React.createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
