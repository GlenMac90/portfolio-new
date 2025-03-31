import Image from "next/image";

import SectionHeading from "./SectionHeading";

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
];

const Skills = () => {
  return (
    <section className="mt-40 flex flex-col items-center justify-center">
      <SectionHeading
        heading="My Toolbox of Skills"
        subHeading="Skills That Power My Work"
        icon="skills"
      />
      <div className="flex mt-16 gap-5 w-full relative">
        {skillsIcons.map((icon) => (
          <div key={icon} className="p-3 rounded-xl bg-gray-800/60">
            <Image
              src={`/skill-icons/${icon}`}
              alt={icon}
              width={58}
              height={58}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
