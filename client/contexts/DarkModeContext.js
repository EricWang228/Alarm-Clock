import React, { createContext, useState, useContext, useMemo } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(!isDarkMode);

  // Wrap the value in useMemo to avoid unnecessary re-renders
  const value = useMemo(() => ({ isDarkMode, toggleSwitch }), [isDarkMode, toggleSwitch]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
