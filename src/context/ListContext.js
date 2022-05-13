import { createContext, useContext, useReducer } from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const initialList = [{ id: Date.now(), item: 'bananas', complete: false }];

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, { id: Date.now(), item: action.payload.item, complete: false }];
      case 'EDIT_ITEM':
        return (state.map((each) => {
          if (each.id === action.payload.id) {
            return { ...each, item: action.payload.item };
          } else {
            return each;
          }
        }));
      case 'DELETE_ITEM':
        return state.filter((each) => each.id !== action.payload.id);
      default:
        throw new Error(`${action.type} is not a defined action`);
    }
  }
  const [state, dispatch] = useReducer(reducer, initialList);

  const handleAddItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: { item } });
  };

  const handleEditItem = ({ id, item }) => {
    dispatch({ type: 'EDIT_ITEM', payload: { id, item } });
  };
  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  return (<ListContext.Provider value={{ state, handleAddItem, handleDeleteItem, handleEditItem }}>{children}</ListContext.Provider>);
};

const useListContext = () => {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('useListContext must be used within a provider');
  }
  return context;
};

export { ListProvider, useListContext };