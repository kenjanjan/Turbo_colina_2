"use client";
import Button from "@repo/ui/button";
import React, { useEffect } from "react";
import { Page as FEService } from "@repo/fe";
import { useTheme } from "@repo/ui/theme-context";
import TenantContainer from "@repo/ui/tenant-container";
import Image from "next/image";

function Body(): React.ReactElement {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Initialize the theme from local storage
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme &&
      (storedTheme === "dark" ||
        storedTheme === "light" ||
        storedTheme === "dim")
    ) {
      setTheme(storedTheme as "dark" | "light" | "dim");
    }
  }, [setTheme]);

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
  let heroImageSrc;

  if (theme === "dark") {
    heroImageSrc = "/images/hero-section-dark.png";
  } else if (theme === "dim") {
    heroImageSrc = "/images/hero-section-dim.png";
  } else {
    heroImageSrc = "/images/hero-section-light.png";
  }
  return (
    <main className="flex flex-col dim:bg-gray-200 items-center justify-between">
      <h1>web</h1>
      <Button className="bg-red-500 text-white" text="web button" />
      <FEService />
      <TenantContainer />
      <Image
        src={heroImageSrc}
        alt="Tenant"
        width={500}
        height={500}
        className="pointer-events-none absolute -top-10 right-0"
      />
      <button onClick={toggleTheme} type="button">
        Toggle to {getNextThemeLabel()} mode
      </button>
    </main>
  );
}

export default Body;
