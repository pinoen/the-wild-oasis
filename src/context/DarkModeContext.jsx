/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  })

  function toggle() {
    setIsDarkMode(curr => !curr)
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggle }}>
    {children}
  </DarkModeContext.Provider>
}

function useDarkMode() {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error("Dark mode context was used outside of DarkModeProvider")
  }

  return context;
}

export { DarkModeProvider, useDarkMode }