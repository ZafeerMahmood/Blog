import SkillSetBox from "@/components/ui/skillsetBox";
import Experience from "@/components/experience";
import Projects from "@/components/ui/Projects";
import Writing from "@/components/ui/Writing";
import Meteors from "@/components/ui/lib/meteors";
import { projects, writings, skillset, PROFILE } from "@/constants/index";
import { Spotlight } from "@/components/ui/lib/spotlight";
import { TextGenerateEffect } from "@/components/ui/lib/text-generate";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center dark:bg-gradient-to-b from-background-dark to-bg-background overflow-hidden "
    >
      <div
        className="flex items-center justify-center h-[700px] w-full relative overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/stars.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <Spotlight
          className="-top-20 left-1/6 md:left-1/4 md:-top-20"
          fill="white"
        />
        {/* HERO */}
        <div
          className="flex flex-col gap-5 text-center items-center justify-center w-full h-full "
        >
          <div className="absolute top-32 left-0 z-0">
            <Meteors number={10} />
          </div>
          <h1>Hello. I{"'"}m Zafeer.</h1>
          <h1 className="text-primary">
            <TextGenerateEffect
              className="text-5xl md:text-6xl lg:text-7xl text-wrap text-primary"
              words={"A Software Engineer"}
            />
          </h1>
        </div>
      </div>

      {/* ABOUT */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">About</h2>
        <p className="leading-6 mt-5">
          {PROFILE.ABOUT}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3 w-full items-center justify-center">
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
