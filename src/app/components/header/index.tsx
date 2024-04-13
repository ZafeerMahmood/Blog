import { routes } from "@/constants/routes";
import SwapTheme from "./Swap/index";
function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-16 ">
      <div
        id="navbar"
        className={`flex justify-center items-center  bg-blue-950 gap-5 text-lg rounded-full px-5 py-2 bg-transparent border border-slate-700`}
      >
        {routes.map((route) => {
          return (
            <p
              key={route}
              className="hover:bg-slate-700 rounded-full px-4 py-2"
            >
              {route}
            </p>
          );
        })}
        <div className="px-4 py-2 h-full w-full items-center justify-center flex">
          <SwapTheme />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
