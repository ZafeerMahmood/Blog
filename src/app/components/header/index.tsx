import { routes } from "@/constants/index";
import SwapTheme from "./Swap/index";
import ClientWrapper from "@/ClientWrapper";

function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-10 md:h-12 lg:h-14  bg-transparent backdrop-filter ">
      <ClientWrapper>
        <div
          id="MainNav"
          className="nav backdrop-filter bg-opacity-55  backdrop-blur-lg "
        >
          {routes.map((route) => {
            return (
              <p
                key={route}
                className="rounded-full px-2 md:px-3 lg:px-4 py-1 lg:py-2  cursor-pointer text-sm lg:text-lg text-foreground"
              >
                {route}
              </p>
            );
          })}
          <div className="px-3 lg:px-4 py-1 lg:py-2 h-full w-full items-center justify-center flex  rounded-full  text-sm lg:text-lg text-foreground">
            <SwapTheme />
          </div>
        </div>
      </ClientWrapper>
    </header>
  );
}

export default Navbar;
