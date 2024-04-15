import { skillset, experience1 } from "@constants/index";
import SkillSetBox from "@/components/ui/skillsetBox";
import Experience from "@/components/experience";
import Projects from "./components/ui/Projects";
import Writing from "./components/ui/Writing";
import { projects, writings } from "@constants/index";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center  dark:bg-gradient-to-b from-background-dark to-bg-background"
    >
      <div
        className="flex items-center justify-center h-[700px] w-full"
        style={{
          backgroundImage: "url('/stars.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* HERO */}
        <div
          className="flex flex-col gap-5 text-center items-center justify-center w-full h-full "
          style={{
            backgroundImage: "url('/gradient.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        >
          <h1>Hello. I{"'"}m Zafeer.</h1>
          <h1 className="text-primary">A Software Engineer</h1>
          <p className="px-5">
            I{"'"}m passionate about creating experiences that are easy to use,
            accessible and
          </p>
          <p className="">that meet the users need.</p>
        </div>
      </div>

      {/* ABOUT */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">About</h2>
        <p className="leading-6 mt-5">
          About I{"'"}m a 21 year old developer living in Germany. I discovered
          my passion for coding after seeing my brother do it. I fell in love
          with using my creativity to build things for the web. Through
          persistence, self-discipline, and commitment, I achieved my goal of
          becoming a frontend developer. What kept me on this journey is that I
          always find learning new things exciting and facing unfamiliar
          challenges. In addition to coding, I enjoy building side projects
          because it allows me to explore my creativity and accomplish exciting
          things.
        </p>
      </div>

      {/* SKILLSET */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">Skillset</h2>
        <div className="flex flex-wrap gap-2 mt-5">
          {skillset.map((skill) => {
            return (
              <SkillSetBox
                key={skill}
                skill={skill}
                color={"text-foreground-secondary"}
              />
            );
          })}
        </div>
      </div>
      {/* Experience */}
      <Experience />

      {/* PROJECTS */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0 w-full  ">
        <h2 className="text-2xl ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-3 w-full items-center justify-center">
          {projects.map((project) => {
            return (
              <div
                className="rounded-sm row-span-1 col-span-1"
                key={project.name}
              >
                <Projects projects={project} />
              </div>
            );
          })}
        </div>
      </div>

      {/* WRITINGS */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0 w-full  ">
        <h2 className="text-2xl ">Some of my writings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-3 w-full items-center justify-center">
          {writings.map((writings) => {
            return (
              <div
                className="rounded-sm row-span-1 col-span-1"
                key={writings.title}
              >
                <Writing writings={writings} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
