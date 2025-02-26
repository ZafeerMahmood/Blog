import { routes } from "@/constants/index";
import Link from "next/link";
import { ThemeSwitcher } from "../ui/theme-switcher";

function Navbar() {
  return (
    <header className="fixed top-8 mx-auto w-full flex items-center justify-center h-12 lg:h-14  bg-transparent backdrop-filter z-[100] ">
      <div
        id="MainNav"
        className="nav backdrop-filter bg-opacity-55  backdrop-blur-lg flex items-center"
      >
        {routes.map((route: any) => {
          return (
            <Link
              key={route.name}
              href={route.path}
              className="rounded-full px-3 lg:px-4 py-2  cursor-pointer text-sm lg:text-lg text-black dark:text-foreground hover:bg-box"
            >
              {route.name}
            </Link>
          );
        })}
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Navbar;
