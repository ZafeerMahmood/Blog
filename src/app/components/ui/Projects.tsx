import Link from "next/link";
import { Github } from "../Icons";
function Projects({
  projects,
}: {
  projects: { name: string; framework: string[]; github: string };
}) {
  return (
    <div className="h-full w-full flex justify-between min-h-48 bg-box border-[1px] border-box-border rounded-md gradientBG hover:border-box-accent">
      <div className="flex p-5"></div>
      <div className="flex flex-col items-center ">
        <h3 className="uppercase text-lg py-14">{projects.name}</h3>
        <div className="flex flex-wrap gap-2 ">
          {projects.framework.map((framework) => {
            return (
              <p key={framework} className="">
                {framework}
              </p>
            );
          })}
        </div>
      </div>
      <Link className="p-2 mt-2 mr-2" href={"/"}>
        <Github className="h-5 w-5 hover:text-primary" />
      </Link>
    </div>
  );
}

export default Projects;
