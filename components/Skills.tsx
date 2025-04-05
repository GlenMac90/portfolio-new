"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const skillsIcons = [
  { icon: "html.png", label: "HTML" },
  { icon: "css.png", label: "CSS" },
  { icon: "javascript.png", label: "JavaScript" },
  { icon: "react.png", label: "React" },
  { icon: "nextjs.png", label: "Next.js" },
  { icon: "tailwind.png", label: "Tailwind CSS" },
  { icon: "typescript.png", label: "TypeScript" },
  { icon: "express.png", label: "Express.js" },
  { icon: "git.png", label: "Git" },
  { icon: "github.png", label: "GitHub" },
  { icon: "mongodb.png", label: "MongoDB" },
  { icon: "node-js.png", label: "Node.js" },
  { icon: "prisma.png", label: "Prisma" },
  { icon: "zustand.png", label: "Zustand" },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        heading="My Toolbox of Skills"
        subHeading="Skills That Power My Work"
        icon="skills"
      />
      <div className="relative mt-16 w-full">
        <div className="absolute h-full w-13 z-10 left-0 bg-gradient-to-l from-transparent to-black" />
        <div className="absolute h-full w-13 z-10 right-0 bg-gradient-to-r from-transparent to-black" />
        <div className="flex gap-5 w-full flex-wrap sm:flex-nowrap justify-center sm:justify-start sm:overflow-auto pb-10 hide-scrollbar sm:flex sm:px-6">
          {skillsIcons.map(({ icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="p-3 rounded-xl bg-gray-800 shrink-0 group relative"
            >
              <Image
                src={`/skill-icons/${icon}`}
                alt={icon}
                height={60}
                width={60}
                className="lg:w-15 lg:h-15 w-12 h-12"
              />
              <div className="group-hover:scale-100 scale-0 -bottom-11 absolute bg-gray-800 rounded-xl p-2 left-1/2 -translate-x-1/2 transition-all duration-150">
                <p className="text-gray-100 font-medium whitespace-nowrap">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
