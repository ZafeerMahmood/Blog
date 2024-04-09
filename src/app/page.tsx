"use client";

import { useEffect } from "react";

export default function Home() {
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
  return (
    <section>
      <div className="">Welcome to Next.js!</div>
      <div className="h-screen bg-slate-900"></div>
      <div className="h-screen bg-slate-900"></div>
      <div className="h-screen bg-slate-900"></div>

      <div className="h-screen bg-slate-900"></div>
    </section>
  );
}
