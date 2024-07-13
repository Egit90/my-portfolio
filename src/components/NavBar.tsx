import { INFO } from "@/data/Info";

const NavBar = () => {
  return (
    <nav className="py-10 mb-12 flex items-center justify-between ">
      <h1 className="text-base md:text-2xl">Elie Maatouk</h1>
      <a
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        href={INFO.Socials.find((e) => e.Name === "Resume")?.Link}
      >
        Resume
      </a>
    </nav>
  );
};

export default NavBar;
