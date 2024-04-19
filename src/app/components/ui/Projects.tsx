import Link from "next/link";
import { Github } from "../Icons";
function Projects({
  projects,
}: {
  projects: { name: string; framework: string[]; github: string };
}) {
  return (
    <Link
      target="_blank"
      href={projects.github}
      className="h-full w-full flex justify-between min-h-56 bg-box border-[1px] border-box-border rounded-md gradientBG hover:border-box-accent"
    >
      <div className="flex p-5"></div>
      <div className="flex flex-col items-center ">
        <h3 className="uppercase text-lg py-14">{projects.name}</h3>
        <div className="flex flex-wrap gap-2 text-start items-center justify-center ">
          {projects.framework.map((framework) => {
            return (
              <p key={framework} className="text-neutral-400">
                {framework}
              </p>
            );
          })}
        </div>
      </div>
      <div className="p-2 mt-5 mr-6">
        <Github className="h-5 w-5 hover:text-primary" />
      </div>
    </Link>
  );
}

export default Projects;
