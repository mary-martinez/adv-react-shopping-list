import { createContext, useContext } from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const initialList = [{ id: 1, item: 'bananas', complete: false }];

  return (<ListContext.Provider value={{ initialList }}>{children}</ListContext.Provider>);
};

const useListContext = () => {
  const context = useContext(ListContext);

  if (context === undefined) {
    throw new Error('useListContext must be used within a provider');
  }
  return context;
};

export { ListProvider, useListContext };