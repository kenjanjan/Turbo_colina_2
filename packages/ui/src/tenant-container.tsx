import React from "react";
import { useTheme } from "@repo/ui/theme-context";
import { cn } from "./utils";
import Image from "next/image";
import heroSectionDark from "../public/assets/hero-section-dark.png";
import heroSectionDim from "../public/assets/hero-section-dim.png";
import heroSectionLight from "../public/assets/hero-section-light.png";
const TenantContainer = () => {
  const { theme } = useTheme(); // Get the current theme from context

  return (
    <div className="relative mt-14">
      <div
        className={cn(
          `shadow-box h-[200px] bg-primary-mint-50 dark:bg-tertiary-700`,
          {
            "bg-gray-900": theme === "dim",
          }
        )}
      >
        TenantContainer
      </div>
      <Image
        src={
          theme === "dark"
            ? heroSectionDark
            : theme === "dim"
              ? heroSectionDim
              : heroSectionLight
        }
        alt="Tenant"
        width={500}
        height={500}
        className="pointer-events-none absolute -top-10 right-0"
      />
    </div>
  );
};

export default TenantContainer;
