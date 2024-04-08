import React from "react";
import { routes } from "@/contents/routes";

function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-16 ">
      <div className="flex justify-center items-center bg-blue-950 gap-5 text-lg rounded-full px-5 py-2">
        {routes.map((route) => {
            return (
                <p key={route} className="hover:bg-slate-700 rounded-full px-4 py-2">
                {route}
                </p>
            );
        })}
        </div>
    </header>
  );
}

export default Navbar;
