export type ILanguages =
  | "C#"
  | ".Net"
  | "NodeJS"
  | "TypeScrip"
  | "JavaScript"
  | "HTML"
  | "React"
  | "Angular"
  | "Linux"
  | "GitHub";

export interface IProject {
  ProjectName: string;
  Demo: string;
  TechnologiesUsed: ILanguages[];
  Description: string;
  Notes?: string;
}

export const MYPROJECTS: IProject[] = [
  {
    ProjectName: "Dating App",
    Demo: "https://datingapp.eliemaatouk.dev/",
    TechnologiesUsed: ["C#", ".Net", "Angular"],
    Description:
      "This web application uses ASP.NET Core for the backend, Angular 17 for the frontend, and Entity Framework Core for the database. It leverages SignalR for real-time communication and Tailwind CSS for styling. It also facilitates real-time engagement through a WebSocket-powered live chat for a dynamic and interactive experience. JWT tokens are used for authentication.",
  },
  {
    ProjectName: "EStore",
    Demo: "https://estore.eliemaatouk.dev/",
    TechnologiesUsed: ["C#", ".Net", "React"],
    Description:
      "This e-commerce application utilizes ASP.NET Core for the backend, ReactJS for the frontend, and Entity Framework Core for the database. It integrates Stripe for secure payment processing and leverages Tailwind CSS for styling. The application implements JWT tokens for user authentication",
  },
];
