import { INFO } from "@/data/Info";
import Image from "next/image";

const LanguagesAndFrameworks = () => {
  return (
    <div className="flex flex-row md:flex-col h-full justify-center md:justify-between flex-wrap">
      {INFO.langs.map((e, i) => (
        <Image
          alt={e.Name}
          src={e.ImageSrc}
          key={i}
          width={40}
          height={40}
          className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
        />
      ))}
    </div>
  );
};

export default LanguagesAndFrameworks;
