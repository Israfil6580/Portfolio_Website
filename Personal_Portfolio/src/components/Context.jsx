import { createContext } from 'react';

// Create the context
export const ProvideContext = createContext(null);

// Create the provider component
export const ContextProvider = ({ children }) => {
  return (
    <ProvideContext.Provider value="abc">
      {children}
    </ProvideContext.Provider>
  );
};


