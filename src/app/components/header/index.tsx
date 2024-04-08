import React from "react";

function Navbar() {
  return (
    <header className="fixed top-10 mx-auto w-full flex items-center justify-center">
        <ul className="flex gap-16 rounded-lg text-xl ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>blog</a>
          </li>
        </ul>
    </header>
  );
}

export default Navbar;
