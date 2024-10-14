"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dim" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const channel = new BroadcastChannel("theme_channel"); // Create a Broadcast Channel

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(null); // Start with null

  // Read the theme from localStorage on the client side only
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    setTheme(savedTheme ? savedTheme : "light"); // Default to "light"
  }, []);

  // Update local storage, document class, and notify others on theme change
  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
      channel.postMessage(theme); // Notify other tabs/windows of the theme change
    }
  }, [theme]);

  // Listen for incoming messages from the Broadcast Channel
  useEffect(() => {
    const handleThemeChange = (event: MessageEvent) => {
      const newTheme = event.data as Theme;
      if (newTheme) {
        setTheme(newTheme); // Update theme if a new theme is received
      }
    };

    channel.addEventListener("message", handleThemeChange);

    // Cleanup the event listener
    return () => {
      channel.removeEventListener("message", handleThemeChange);
    };
  }, []);

  // Listen for localStorage changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme") {
        const newTheme = event.newValue as Theme;
        if (newTheme) {
          setTheme(newTheme);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Render null until theme is set to avoid hydration issues
  if (theme === null) {
    return null; // Prevents rendering until client-side theme is determined
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
