import React, { useContext } from 'react';

export interface GlobalContextInterface {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
}

export const GlobalContext = React.createContext<GlobalContextInterface>({
  currentTheme: 'defaultDark',
  setCurrentTheme: () => {}
});

export const useGlobalContext = () => useContext(GlobalContext);
