"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // use Effect to handle navbar motion
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navBar!!.classList.add("bg-background-secondary", "border");
      } else {
        navBar!!.classList.remove("bg-background-secondary", "border");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
