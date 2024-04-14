import { routes } from "@/constants/index";
import SwapTheme from "./Swap/index";
function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-16 ">
      <nav
        id="MainNav"
        className={`flex justify-center items-center gap-5 text-lg rounded-full px-5 py-2 `}
      >
        {routes.map((route) => {
          return (
            <p
              key={route}
              className="hover:text-foreground rounded-full px-4 py-2 text-foreground-secondary cursor-pointer"
            >
              {route}
            </p>
          );
        })}
        <div className="px-4 py-2 h-full w-full items-center justify-center flex hover:text-foreground rounded-full text-foreground-secondary">
          <SwapTheme />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
