import { routes } from "@/constants/index";

function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-10 md:h-12 lg:h-14  bg-transparent backdrop-filter ">
      <div
        id="MainNav"
        className="nav backdrop-filter bg-opacity-55  backdrop-blur-lg "
      >
        {routes.map((route) => {
          return (
            <p
              key={route}
              className="rounded-full px-2 md:px-3 lg:px-4 py-1 lg:py-2  cursor-pointer text-sm lg:text-lg text-foreground hover:bg-box"
            >
              {route}
            </p>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
