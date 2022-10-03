import React, { useState, useContext } from "react";

export interface IGlobalContext {
  darkMode: boolean;
  setDarkMode: (toggle: boolean) => void;
}

const defaultContext = {
  darkMode: false,
  setDarkMode: () => {},
}

const GlobalContext = React.createContext<IGlobalContext>(defaultContext);

export function useGlobal() {
  return useContext(GlobalContext);
}

export default function GlobalContextProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  const props = {
    darkMode,
    setDarkMode,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
}