import { experience1 } from "@/constants";
import SkillSetBox from "@/components/ui/skillsetBox";
function Experience() {
  return (
    <>
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-5 w-full gap-5 ">
          <div className="row-span-1 col-span-1 text-foreground-secondary">
            Sep 2023 - Feb 2024
          </div>
          <div className="row-span-1 col-span-3">
            <h3 className="py-2">DataVoer - Software Engineer</h3>
            <p>
              Worked on developing chatbot solutions to help digitize societies
              around the world, using AI technologies such as ChatGPT to enhance
              services in cities. I focused on creating user interfaces and
              backend APIs, utilizing a range of technologies with the goal of
              contributing to global digital transformation. To ensure our
              platforms were strong and worked well, I implemented comprehensive
              testing with Cypress. I also used Insomnia for effective API
              testing, which helped make our development process smoother and
              our products more reliable. Experienced in Scrum, I effectively
              managed tasks and collaborated with the team to meet our goals.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {experience1.map((skill) => {
                return (
                  <SkillSetBox
                    key={skill}
                    skill={skill}
                    color={"text-primary"}
                  />
                );
              })}
            </div>
          </div>
          <div className="row-span-1 col-span-1 text-foreground-secondary">
            Sep 2023 - Feb 2024
          </div>
          <div className="row-span-1 col-span-3 ">
            <h3 className="py-2">CARE - Software Developer</h3>
            <p>
              Worked with the product team to develop new features for a
              vacation accommodation booking platform. I also ensured that the
              platform works smoothly on different devices. I used BrowserStack
              to recreate mobile environments and gain valuable insights for the
              development process. Additionally, I used Pact to create API
              contracts with mock data, making testing and development more
              efficient. I had experience working in a Kanban environment.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 ">
              {experience1.map((skill) => {
                return (
                  <SkillSetBox
                    key={skill}
                    skill={skill}
                    color={"text-primary"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
