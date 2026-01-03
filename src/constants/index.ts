const ROUTES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const SKILLSET = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Flask",
  "Django",
  "Django Rest Framework",
  "FastAPI",
  "Node.js",
  "Express.js",
  "AWS (lamda & S3)",
  "Supabase",
  "Firebase",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "Cypress",
  "Zustand",
  "GraphQL",
  "Docker",
  "REST API",
  "Linux",
  "Redis",
  "Github CI/CD",
];

const EXPERIENCES = [
  {
    period: "Apr 2024 - Present",
    title: "TaxGPT - Software Engineer",
    description: `
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
    and migrated the codebase from JSX to TypeScript for better maintainability.`,
    skills: [
      "Django",
      "Django Rest Framework",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "REST API",
      "Redis",
      "Celery",
      "PostgreSQL",
      "Docker",
      "AWS",
      "CI/CD",
      "Stripe",
      "SWR",
      "DataDog",
      "Rollbar",
      "Feature Flags",
      "Unit Testing",
      "Momentic Integration Testing",
    ],
  },
  {
    period: "Mar 2022 - Apr 2024",
    title: "DataVoer - Software Engineer",
    description: `
    Working at DataVoer, I've been deeply involved in creating and
    maintaining various projects, leveraging our existing tech stacks
    to deliver exceptional solutions. My expertise lies in front-end
    development, where I've proficiently utilized ReactJS and
    Tailwind CSS to craft intuitive user experiences and responsive
    designs. Additionally, I've spearheaded Salesforce integration
    with dedicated servers, optimizing data management and workflow
    efficiency. Implementing GitHub Workflows for continuous
    integration and deployment has been integral to streamlining our
    development processes and ensuring top-notch code quality.
    Furthermore, I've led API development efforts for targeted
    applications, utilizing frameworks such as Flask, Fast API, and
    Express to facilitate seamless data exchange. Notably, I've
    contributed to designing scalable systems architectures for new
    projects, employing JavaScript/TypeScript and Python to ensure
    robustness, flexibility, and future-proofing.`,
    skills: [
      "Next.js",
      "React",
      "React Native",
      "Python",
      "Flask",
      "FastAPI",
      "MongoDB",
      "SQL",
      "REST",
      "Salesforce",
      "Git",
      "GitHub Workflows",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    period: "Jul 2021 - Oct 2021",
    title: "CARE - Software Developer",
    description: `
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
    businesses`,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "JavaScript",
      "TypeScript",
      "REST API",
    ],
  },
];

const PROJECTS = [
  {
    name: "Blog",
    framework: ["Next.js", "Tailwind CSS", "MDX"],
    github: "https://github.com/ZafeerMahmood/Blog",
  },
  {
    name: "Terminal",
    framework: ["PowerShell", "Bash"],
    github: "https://github.com/ZafeerMahmood/terminal",
  },
];

const WRITINGS = [
  {
    //YY-MM-DD
    title: "JWT verification in Python (Auth0)",
    description: "How to verify JWT tokens in Python using PyJWT and Auth0",
    ttr: "2 mins read",
    time: "2022-04-01",
    link: "/blog/jwt-verification",
  },
  {
    title:
      "Implementing a custom Toast library in React with Daisy ui and Zustand",
    description: "How to create a custom toast library in React with Daisy UI",
    ttr: "5 mins read",
    time: "2023-10-01",
    link: "/blog/toast",
  },
];

const PROFILE = {
  F_NAME: "Zafeer",
  L_NAME: "Mahmood",
  NAME: "Zafeer Mahmood",
  TITLE: "Software Engineer",
  LOCATION: "Islamabad, Pakistan",
  EMAIL: "zafeer7460@gmail.com",
  ABOUT: `
  Hello there! I'm Zafeer, a developer based in Pakistan. My
  fascination with coding sparked when I first encountered the magic of
  programming. The allure of using my creativity to shape digital
  experiences was irresistible. Fuelled by determination and a thirst
  for knowledge, I pursued my computer science degree and ventured into
  the world of software engineering. What propels me forward is the
  excitement of continuous learning and the satisfaction of conquering
  new challenges. Outside of work, I immerse myself in side projects,
  exploring my creativity and bringing ideas to fruition.
  `,
  LINKS: {
    github: "https://github.com/ZafeerMahmood",
    linkedin: "https://www.linkedin.com/in/zafeer-mahmood-20aa28280/",
  },
  DEPLOYMENT: "https://zafeer.vercel.app/",
}

export {
  EXPERIENCES,
  PROJECTS,
  WRITINGS,
  SKILLSET,
  ROUTES,
  PROFILE
};
