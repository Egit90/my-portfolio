import { INFO } from "@/data/Info";
import Link from "next/link";

const NavBar = () => {
  const resumeLink = INFO.Socials.find((e) => e.Name === "Resume")?.Link;

  if (!resumeLink) return;

  return (
    <nav className="py-10 mb-12 flex items-center justify-between ">
      <h1 className="text-base md:text-2xl">Elie Maatouk</h1>
      <Link
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        target="_blank"
        href={resumeLink}
      >
        Resume
      </Link>
    </nav>
  );
};

export default NavBar;
