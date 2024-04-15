import { LinkedIn, Github } from "@components/Icons";
import Link from "next/link";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-16 flex items-center justify-center px-10 xl:px-0 mt-10">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between items-center w-full h-full  max-w-7xl border-t-[1px] border-foreground-secondary text-foreground-secondary ">
        <p className="text-xs">© {year} Zafeer Tech</p>
        <div className="text-xs flex gap-5">
          <Link
            target="_blank"
            href={
              "https://github.com/ZafeerMahmood?tab=overview&from=2024-04-01&to=2024-04-15"
            }
          >
            <Github className="h-5 w-5 cursor-pointer hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/zafeer-mahmood-20aa28280/"}
          >
            <LinkedIn className="h-5 w-5 cursor-pointer hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
