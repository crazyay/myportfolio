import React from "react";
import Techlist from "./Techlist";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className=' hover:scale-[115%] duration-300 w-28 h-28' key={technology.name}>
          <Techlist icon={technology.icon} />
          <h3 className="text-center">{technology.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
