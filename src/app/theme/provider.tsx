"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // use Effect to handle navbar motion
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("MainNav");
      if (window.scrollY > 100) {
        navBar!!.classList.add("bg-box", "border-2", "border-box-border");
      } else {
        navBar!!.classList.remove("bg-box", "border-2", "border-box-border");
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
