import React from "react";
import { useTheme } from "@repo/ui/theme-context";
import { cn } from "./utils";

const TenantContainer = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <div
      className={cn(`shadow-box  bg-primary-mint-50 dark:bg-tertiary-700`, {
        "bg-tertiary-400": theme === "dim",
      })}
    >
      TenantContainer
    </div>
  );
};

export default TenantContainer;
