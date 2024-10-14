"use client";
import Button from "@repo/ui/button";
import React from "react";
import { Page as FEService } from "@repo/fe";
import { useTheme } from "@repo/ui/theme-context";
const Body = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme =
      theme === "light" ? "dim" : theme === "dim" ? "dark" : "light";
    setTheme(newTheme); // Update the theme state
    // Manually update local storage to trigger storage event
    localStorage.setItem("theme", newTheme);
  };
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>web</h1>
      <Button className="bg-red-500 text-white" text="web button" />
      <FEService />
      <button onClick={toggleTheme}>
        Toggle to{" "}
        {theme === "light" ? "dim" : theme === "dim" ? "dark" : "light"} mode
      </button>
    </main>
  );
};

export default Body;
