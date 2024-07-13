import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { ILanguages } from "./projects";
import { SiReaddotcv } from "react-icons/si";

export type IMALANG = { Name: ILanguages; ImageSrc: string };

export const MALANG: IMALANG[] = [
  {
    Name: "C#",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    Name: ".Net",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    Name: "NodeJS",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    Name: "TypeScrip",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    Name: "JavaScript",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    Name: "HTML",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    Name: "React",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    Name: "Angular",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
  },

  {
    Name: "Linux",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    Name: "GitHub",
    ImageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const INFO = {
  Elie: "Elie Maatouk",
  position: "Fullstack Developer",
  pageTitle: "Elie Maatouk Portfolio",
  Summary:
    "Highly motivated Software Developer with a proven record in building and maintaining user-friendly applications and websites. Specializes in full-stack development (DotNet, Node.js, .NET, React.js, Angular,Vue.js) and possesses a passion for continuous learning. Backed by a successful track record of delivering impactful projects.",
  pageDescription:
    "Highly motivated Software Developer with a proven record in building and maintaining user-friendly applications and websites. Specializes in full-stack development (DotNet, Node.js, .NET, React.js, Angular,Vue.js) and possesses a passion for continuous learning. Backed by a successful track record of delivering impactful projects.",
  keywords: [
    "Elie",
    "Maatouk",
    "FullStack",
    "Development",
    "Dotnet",
    ".net",
    "EntityFramework",
    "C#",
    "TypeScript",
    "JavaScript",
    "ASP.Net",
    "NextJs",
  ],
  langs: MALANG,
  Socials: [
    {
      Name: "LinkedIn",
      Icon: AiFillLinkedin,
      Link: "https://www.linkedin.com/in/elie-maatouk-b84891132/",
    },
    {
      Name: "GitHub",
      Icon: AiFillGithub,
      Link: "https://github.com/Egit90",
    },
    {
      Name: "Email",
      Icon: AiFillMail,
      Link: "mailto:elie90@gmail.com",
    },
    {
      Name: "Resume",
      Icon: SiReaddotcv,
      Link: "https://drive.google.com/file/d/1ki4Wev9jTArGVtFhrWVsHV3DZ42IpJSv/view",
    },
  ],
};
