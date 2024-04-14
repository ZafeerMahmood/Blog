import { skillset } from "@constants/index";
import SkillSetBox from "@/components/ui/skillsetBox";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center  dark:bg-gradient-to-b from-background-dark to-bg-background"
    >
      <div
        className="flex items-center justify-center h-[750px] w-full"
        style={{
          backgroundImage: "url('/stars.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* HERO */}
        <div
          className="flex flex-col gap-5 text-center items-center justify-center"
          // style={{
          //   backgroundImage: "url('/gradient.jpeg')",
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
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
            return <SkillSetBox key={skill} skill={skill} />;
          })}
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">Experience</h2>
        <p className="leading-6 mt-5"></p>
      </div>
    </section>
  );
}
