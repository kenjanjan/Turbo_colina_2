"use client";

import Button from "@repo/ui/button";
import React from "react";
import { Page as FEService } from "@repo/fe";
import { useTheme } from "@repo/ui/theme-context";

function Body(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => {
    let newTheme: "dark" | "light" | "dim";

    // Simplified theme toggling logic
    switch (theme) {
      case "light":
        newTheme = "dim";
        break;
      case "dim":
        newTheme = "dark";
        break;
      default:
        newTheme = "light";
    }

    setTheme(newTheme); // Update the theme state
    // Manually update local storage to trigger storage event
    localStorage.setItem("theme", newTheme);
  };

  const getNextThemeLabel = (): "dark" | "light" | "dim" => {
    if (theme === "light") return "dim";
    if (theme === "dim") return "dark";
    return "light";
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>web</h1>
      <Button className="bg-red-500 text-white" text="web button" />
      <FEService />
      <button onClick={toggleTheme} type="button">
        Toggle to {getNextThemeLabel()} mode
      </button>
    </main>
  );
}

export default Body;
