import { INFO } from "@/data/Info";
import ME from "@/data/me-noBg.png";
import Image from "next/image";
import LanguagesAndFrameworks from "./LanguagesAndFrameworks";
import Link from "next/link";

const InfoSection = () => {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col-reverse md:flex-row h-full w-full justify-center items-center gap-8">
        <LanguagesAndFrameworks />
        {/* Image */}
        <div className="bg-slate-100 rounded-full">
          <Image
            src={ME}
            sizes="(max-width: 768px) 100vw, 33vw"
            layout="responsive"
            alt="Elie Maatouk"
            className="rounded-full"
          />
        </div>
      </div>
      {/* Name position and Summary */}
      <div>
        <div className="text-center mt-10">
          <h2 className="text-2xl md:text-5xl py-2 text-teal-600 font-medium">
            {INFO.Elie}
          </h2>
          <h3 className="text-lg md:text-2xl py-2">{INFO.position}</h3>
          <p className="text-sm md:text-md py-5 leading-8 text-gray-800 text-left md:text-center ">
            {INFO.Summary}
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          {INFO.Socials.map((e, i) => (
            <Link key={i} href={e.Link} target="_blank">
              <e.Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
