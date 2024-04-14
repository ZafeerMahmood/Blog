import { Moon } from "../Icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-16 flex items-center justify-center px-10 xl:px-0">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between items-center w-full h-full  max-w-7xl border-t-[1px] border-foreground-secondary text-foreground-secondary ">
        <p className="text-xs">© {year} Zafeer Tech</p>
        <div className="text-xs">
          <Moon className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
