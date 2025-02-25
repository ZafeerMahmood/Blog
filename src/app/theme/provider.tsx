"use client";
import { useEffect } from "react";
import { ThemeProvider} from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("MainNav");
      if (window.scrollY > 100) {
        navBar!!.classList.add(
          "bg-background-dark",
          "border-[1px]",
          "border-box-border"
        );
      } else {
        navBar!!.classList.remove(
          "bg-background-dark",
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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
