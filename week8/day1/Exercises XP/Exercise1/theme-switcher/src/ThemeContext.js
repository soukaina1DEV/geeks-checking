import React, { createContext, useState } from "react";

// 1️⃣ Créer le contexte
export const ThemeContext = createContext();

// 2️⃣ Créer le provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Fonction pour changer de thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
