"use client";
import { useEffect } from "react";
function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const navBar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navBar!!.classList.add("bg-slate-800");
        navBar!!.classList.add("border");
      } else {
        navBar!!.classList.remove("bg-slate-800");
        navBar!!.classList.remove("border");
      }
    });
  }, []);
  return <>{children}</>;
}

export default ClientWrapper;
