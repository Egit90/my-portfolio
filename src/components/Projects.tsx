import { IMALANG, INFO, MALANG } from "@/data/Info";
import { IProject } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ myProjects }: { myProjects: IProject[] }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-20">
      {myProjects.map((e, i) => (
        <MyCard Project={e} key={i} />
      ))}
    </div>
  );
};

const MyCard = ({ Project }: { Project: IProject }) => {
  const projectLangsLogo: IMALANG[] = [];

  Project.TechnologiesUsed.forEach((e) => {
    const v = MALANG.find((x) => x.Name === e);
    if (!v) {
      projectLangsLogo.push({ Name: e, ImageSrc: "" });
      return;
    }
    projectLangsLogo.push(v);
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg  hover:bg-zinc-300">
      <div className="flex flex-row justify-between p-10">
        <div className="font-bold text-xl mb-2">{Project.ProjectName}</div>
        <div className="flex flex-row gap-2">
          {projectLangsLogo.map((e, i) => (
            <Image
              key={i}
              src={e.ImageSrc}
              alt={e.Name}
              width={30}
              height={30}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm md:text-base">
          {Project.Description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-teal-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Link href={Project.Demo}>Demo</Link>
        </span>
      </div>
    </div>
  );
};

export default Projects;
