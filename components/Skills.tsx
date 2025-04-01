import Image from "next/image";

import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const skillsIcons = [
  "html.png",
  "css.png",
  "javascript.png",
  "react.png",
  "nextjs.png",
  "tailwind.png",
  "typescript.png",
  "express.png",
  "git.png",
  "github.png",
  "mongodb.png",
  "node-js.png",
  "prisma.png",
  "zustand.png",
];

const Skills = () => {
  return (
    <SectionWrapper>
      <SectionHeading
        heading="My Toolbox of Skills"
        subHeading="Skills That Power My Work"
        icon="skills"
      />
      <div className="relative mt-16">
        <div className="absolute h-full w-13 left-0 bg-gradient-to-l from-transparent to-black" />
        <div className="absolute h-full w-13 right-0 bg-gradient-to-r from-transparent to-black" />
        <div className="flex gap-5 w-full overflow-auto hide-scrollbar">
          {skillsIcons.map((icon) => (
            <div key={icon} className="p-3 rounded-xl bg-gray-800 shrink-0">
              <Image
                src={`/skill-icons/${icon}`}
                alt={icon}
                width={65}
                height={65}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
