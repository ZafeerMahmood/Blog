import { routes } from "@/constants/routes";
import SwapTheme from "./Swap/index";
function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-16 ">
      <div
        id="navbar"
        className={`flex justify-center items-center gap-5 text-lg rounded-full px-5 py-2 bg-transparent  border-background-secondary  dark:border-background-secondary dark:bg-background-secondary dark:text-foreground-secondary`}
      >
        {routes.map((route) => {
          return (
            <p
              key={route}
              className="hover:text-foreground rounded-full px-4 py-2 text-foreground-secondary"
            >
              {route}
            </p>
          );
        })}
        <div className="px-4 py-2 h-full w-full items-center justify-center flex hover:text-foreground rounded-full text-foreground-secondary">
          <SwapTheme />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
