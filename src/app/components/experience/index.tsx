import { experience1, experience2, experience3 } from "@/constants";
import SkillSetBox from "@/components/ui/skillsetBox";

function Experience() {
  return (
    <>
      <div className="flex flex-col text-start max-w-7xl mt-28 px-10 xl:px-0">
        <h2 className="text-2xl">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-5 w-full gap-5 ">
          <div className="row-span-1 col-span-1 text-foreground-secondary">
            Apr 2024 - Present
          </div>
          <div className="row-span-1 col-span-3">
            <h3 className="py-2">TaxGPT - Full Stack Engineer</h3>
            <p>
              At TaxGPT, I played a key role in developing an AI-driven tax automation platform,
              contributing to its growth from 0 ARR to 1M ARR. Working within a high-velocity team of
              8+ engineers, I helped build scalable and efficient solutions using a modern tech stack
              including Next.js, Django, and AWS services.
              Some of my key contributions included designing a seamless onboarding flow, building a team
              management feature that enabled organization owners to invite members while managing
              subscription-based billing, and enhancing API performance with caching solutions like SWR.
              I also worked on production debugging using DataDog and Rollbar, integrated feature flags
              for controlled rollouts, and maintained unit tests for multiple services in Django.
              Additionally, I collaborated with the design team to enhance the user experience
              and migrated the codebase from JSX to TypeScript for better maintainability.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {experience3.map((skill) => {
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
            Mar 2022 - Apr 2024
          </div>
          <div className="row-span-1 col-span-3">
            <h3 className="py-2">DataVoer - Software Engineer</h3>
            <p>
              Working at DataVoer, I{"'"}ve been deeply involved in creating and
              maintaining various projects, leveraging our existing tech stacks
              to deliver exceptional solutions. My expertise lies in front-end
              development, where I{"'"}ve proficiently utilized ReactJS and
              Tailwind CSS to craft intuitive user experiences and responsive
              designs. Additionally, I{"'"}ve spearheaded Salesforce integration
              with dedicated servers, optimizing data management and workflow
              efficiency. Implementing GitHub Workflows for continuous
              integration and deployment has been integral to streamlining our
              development processes and ensuring top-notch code quality.
              Furthermore, I{"'"}ve led API development efforts for targeted
              applications, utilizing frameworks such as Flask, Fast API, and
              Express to facilitate seamless data exchange. Notably, I{"'"}ve
              contributed to designing scalable systems architectures for new
              projects, employing JavaScript/TypeScript and Python to ensure
              robustness, flexibility, and future-proofing.
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
            Jul 2021 - Oct 2021
          </div>
          <div className="row-span-1 col-span-3 ">
            <h3 className="py-2">CARE - Software Developer</h3>
            <p>
              As part of my responsibilities, I spearheaded the development of
              an innovative Employee Portal System, leveraging Next.js, Tailwind
              CSS, and Supabase technologies. This involved creating a dynamic
              frontend with Next.js and Tailwind CSS to guarantee a
              user-friendly interface and seamless responsiveness across
              devices. Employing Supabase for efficient data management and
              authentication within the system ensured robust security and
              streamlined user experience. The successful deployment of the
              system using Vercel further underscored our commitment to
              accessibility and scalability, empowering users with reliable and
              accessible access to essential resources. This project not only
              showcased my technical prowess but also strengthened my ability to
              deliver impactful solutions that meet the needs of modern
              businesses.
            </p>
            <div className="flex flex-wrap gap-2 mt-5 ">
              {experience2.map((skill) => {
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
