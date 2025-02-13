import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create a Context
const ThemeContext = createContext();

// 2️⃣ Provide the Theme to the App
export const ThemeProvider = ({ children }) => {
  // Check localStorage for theme preference
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Update the theme in the document & localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between Light & Dark mode
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Create a Custom Hook to use the Theme
export const useTheme = () => useContext(ThemeContext);
