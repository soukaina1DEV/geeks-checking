import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./index.css";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>🌗 Theme Switcher Example</h1>
      <p>This is a simple demonstration of light and dark mode in React.</p>
      <ThemeSwitcher />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
