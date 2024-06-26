import { routes } from "@/constants/index";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-12 lg:h-14  bg-transparent backdrop-filter  ">
      <div
        id="MainNav"
        className="nav backdrop-filter bg-opacity-55  backdrop-blur-lg "
      >
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className="rounded-full px-3 lg:px-4 py-2  cursor-pointer text-sm lg:text-lg text-foreground hover:bg-box"
            >
              {route.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
