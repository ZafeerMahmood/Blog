import { LinkedIn, Github } from "@components/Icons";
import Link from "next/link";
import { LINKS } from "@/constants";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-16 flex items-center justify-center px-10 xl:px-0 mt-10">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between items-center w-full h-full  max-w-7xl border-t-[1px] border-foreground-secondary text-foreground-secondary ">
        <p className="text-xs">© {year} Zafeer Tech</p>
        <div className="text-xs flex gap-5">
          <Link
            target="_blank"
            href={LINKS.github}
            area-label="Github"
          >
            <Github className="h-5 w-5 cursor-pointer hover:text-primary" />
          </Link>
          <Link
            target="_blank"
            href={LINKS.linkedin}
            area-label="LinkedIn"
          >
            <LinkedIn className="h-5 w-5 cursor-pointer hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
