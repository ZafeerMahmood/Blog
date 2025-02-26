import { experiences } from "@/constants";
import SkillSetBox from "@/components/ui/skillsetBox";

function Experience() {
  return (
    <>
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-5 w-full gap-5 ">
          {experiences.map((experience, index) => (
            <>
              <div key={`date-${index}`} className="row-span-1 col-span-1 text-foreground-secondary">
                {experience.period}
              </div>
              <div key={`content-${index}`} className="row-span-1 col-span-3">
                <h3 className="py-2">{experience.title}</h3>
                <p>{experience.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {experience.skills.map((skill) => (
                    <SkillSetBox
                      key={skill}
                      skill={skill}
                      color={"text-primary"}
                    />
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
