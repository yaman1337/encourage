"use client";
import React, { createContext, useState } from "react";

interface IThemeContextData {
  theme: string;
  updateTheme(theme: string): void;
}

export const ThemeContext = createContext<IThemeContextData | null>(null);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  React.useEffect(() => {
    let prevTheme = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", prevTheme);
    setTheme(prevTheme);
  }, []);

  function updateTheme(theme: string) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
