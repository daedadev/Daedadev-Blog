import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

export function useGlobal() {
  return useContext(GlobalContext);
}

export default function GlobalContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const value = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
