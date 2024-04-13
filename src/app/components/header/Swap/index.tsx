"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/components/Icons";
import { useEffect, useState } from "react";

function SwapTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return <></>;

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon className="h-8 w-5" />
      ) : (
        <Sun className="h-8 w-5" />
      )}
    </button>
  );
}

export default SwapTheme;
