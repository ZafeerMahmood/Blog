"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // use Effect to handle navbar motion
  useEffect(() => {
    const navBar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navBar!!.classList.add("bg-background-secondary");
        navBar!!.classList.add("border");
      } else {
        navBar!!.classList.remove("bg-background-secondary");
        navBar!!.classList.remove("border");
      }
    });
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
