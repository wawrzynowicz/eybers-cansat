import React, { createContext, useContext, useState } from 'react';

const StarFieldContext = createContext();

export function StarFieldProvider({ children }) {
  const [settings, setSettings] = useState({
    speed: 1,
    density: 1
  });

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <StarFieldContext.Provider value={{ settings, updateSettings }}>
      {children}
    </StarFieldContext.Provider>
  );
}

export function useStarField() {
  const context = useContext(StarFieldContext);
  if (!context) {
    throw new Error('useStarField must be used within StarFieldProvider');
  }
  return context;
}