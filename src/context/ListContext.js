import { createContext, useContext, useReducer } from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const initialList = [{ id: Date.now(), item: 'bananas', complete: false }];

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, { id: Date.now(), item: action.payload.item, complete: false }];
      case 'DELETE_ITEM':
        return state.filter((each) => each.id !== action.payload.id);
      default:
        throw new Error('not a defined action');
    }
  }
  const [state, dispatch] = useReducer(reducer, initialList);

  const handleAddItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: { item } });
  };
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  return (<ListContext.Provider value={{ state, handleAddItem, handleDeleteItem }}>{children}</ListContext.Provider>);
};

const useListContext = () => {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('useListContext must be used within a provider');
  }
  return context;
};

export { ListProvider, useListContext };