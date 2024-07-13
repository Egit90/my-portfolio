import { INFO } from "@/data/Info";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiReaddotcv } from "react-icons/si";
import ME from "@/data/me-noBg.png";
import Image from "next/image";
import LanguagesAndFrameworks from "./LanguagesAndFrameworks";

const InfoSection = () => {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 ">
      <div className="flex flex-col-reverse md:flex-row  h-full w-full justify-center items-center">
        <LanguagesAndFrameworks />
        {/* Image */}
        <div className="col-span-2 mx-auto relative bg-gradient-to-b from-teal-500  md:rounded-lg rounded-full w-80 h-80   overflow-hidden">
          <Image src={ME} alt="Elie Maatouk" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Name position and Summary */}
      <div>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            {INFO.Elie}
          </h2>
          <h3 className="text-2xl py-2">{INFO.position}</h3>
          <p className="text-md py-5 leading-8 text-gray-800">{INFO.Summary}</p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillMail />
          <SiReaddotcv />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
