import { routes } from "@/constants/index";
import SwapTheme from "./Swap/index";
import ClientWrapper from "@/ClientWrapper";
function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center  h-10 md:h-14 lg:h-16  ">
      <ClientWrapper>
        <div
          id="MainNav"
          className="flex justify-center items-center  gap-2 md:gap-3 lg:gap-5 text-lg rounded-full px-2 md:px-3 lg:px-5 py-1 lg:py-2  backdrop-filter bg-opacity-80backdrop-blur-lg"
        >
          {routes.map((route) => {
            return (
              <p
                key={route}
                className="hover:text-foreground rounded-full px-2 md:px-3 lg:px-4 py-1 lg:py-2 text-foreground-secondary cursor-pointer"
              >
                {route}
              </p>
            );
          })}
          <div className="px-2 md:px-3 lg:px-4 py-1 lg:py-2h-full w-full items-center justify-center flex hover:text-foreground rounded-full text-foreground-secondary">
            <SwapTheme />
          </div>
        </div>
      </ClientWrapper>
    </header>
  );
}

export default Navbar;
