"use client";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // use Effect to handle navbar motion
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("MainNav");
      if (window.scrollY > 100) {
        navBar!!.classList.add(
          "bg-[#232323]",
          "border-[1px]",
          "border-box-border"
        );
      } else {
        navBar!!.classList.remove(
          "bg-[#232323]",
          "border-[1px]",
          "border-box-border"
        );
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
