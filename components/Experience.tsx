"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const experienceData = [
  {
    company: "Hight.io",
    icon: "/experience/hight.png",
    position: "Full Stack Developer",
    duration: "Jun 2024 - Present",
    location: "Remote, Bulgaria",
    responsibilities: [
      "Leading a team of developers in designing and building high-quality SaaS products in the ERP sector.",
      "Overseeing the full software development lifecycle — from architecture and implementation to deployment and maintenance — ensuring scalability, performance, and reliability.",
      "Managing and implementing integrations with major cloud platforms such as AWS, Azure, and Oracle.",
      "Collaborating closely with clients, designers, and stakeholders to translate business requirements into technical solutions and deliver exceptional user experiences.",
      "Developing AI-powered solutions, including features for file analysis, intelligent querying, and data-driven automation.",
    ],
    gradientClasses: "bg-gradient-to-b from-gradient-purple to-gradient-pink",
  },
  {
    company: "Freelance",
    icon: "/experience/freelance.png",
    position: "Front-End Developer",
    duration: "Jan 2024 - Jun 2024",
    location: "Remote, UK",
    responsibilities: [
      "Building responsive and user-friendly web applications using React and Next.js.",
      "Implementing clean and efficient code to ensure optimal performance.",
      "Collaborating with a designer to create intuitive and visually appealing interfaces.",
      "Optimizing application performance and ensuring cross-browser compatibility.",
    ],
    gradientClasses: "bg-gradient-to-b from-gradient-pink to-gradient-blue",
  },
  {
    company: "JSM Masterclass",
    icon: "/experience/medal.png",
    position: "Front-End Developer",
    duration: "Jun 2023 - Dec 2023",
    location: "Remote, UK",
    responsibilities: [
      "Participated in a 6-month course developing real-world projects using React, Next.js, Tailwind CSS, TypeScript, and MongoDB.",
      "Over 500 hours of coding and a 0.78% acceptance rate",
      "Learned about the latest features and best practices in React, Next.js, and TypeScript.",
    ],
    gradientClasses: "bg-gradient-to-b from-gradient-blue to-gradient-green/10",
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        heading="Driving My Career Forward"
        subHeading="My Professional Journey"
        icon="experience"
      />
      <div className="flex flex-col justify-center items-center w-full mt-15">
        {experienceData.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={experience.company}
              className="flex lg:grid gap-2 sm:gap-5 w-full mt-4 lg:grid-cols-9 relative lg:h-90"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className={`${
                  isEven ? "lg:col-start-6" : "lg:col-start-1"
                } lg:col-span-4 p-7 w-full h-fit flex flex-col rounded-xl bg-gray-800 border border-gray-700`}
              >
                <h3 className="lg:text-3xl text-2xl font-semibold text-white">
                  {experience.position}
                </h3>
                <div className="mt-3.5 flex gap-y-2 gap-x-5 text-sm lg:text-lg text-gray-100 whitespace-nowrap flex-wrap">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/calendar.png"
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/location.png"
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <em className="text-gray-200 font-medium mt-6">
                  Responsibilities
                </em>
                <ul className="mt-3 gap-2 flex flex-col">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="text-gray-100 text-sm lg:text-base flex"
                    >
                      <div className="h-1 w-1 mt-[11px] rounded-full bg-gray-100 mr-3 shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="lg:col-span-1 lg:col-start-5 w-fit flex flex-col items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 relative">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  className="z-20 p-2.5 size-[70px] rounded-full bg-gray-800 border border-gray-700"
                >
                  <Image
                    src={experience.icon}
                    alt={experience.company}
                    width={50}
                    height={50}
                    className="shrink-0"
                  />
                </motion.div>
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: 350 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  className={`z-10 border-l absolute hidden lg:flex translate-y-10 w-0.5 h-[350px] ${experience.gradientClasses}`}
                />
                <motion.span
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  className={`z-10 border-l absolute lg:hidden flex h-full translate-y-10 w-0.5 ${experience.gradientClasses}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
