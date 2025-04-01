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
      "Building high quality SaaS products in the ERP sector.",
      "Working with a range of technologies including React, Next.js, Tailwind CSS, Node.js, Zustand, PostgreSQL, Supabase and AWS.",
      "Crafting responsive and scalable web applications with a focus on user experience.",
      "Working on both the front-end and back-end of the application.",
    ],
    gradientClasses: "bg-gradient-to-b from-gradient-purple to-gradient-pink",
  },
  {
    company: "Freelance",
    icon: "/experience/freelance.png",
    position: "Front-End Developer",
    duration: "Jan 2023 - Jun 2024",
    location: "Remote, United Kingdom",
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
    location: "Remote, United Kingdom",
    responsibilities: [
      "Participated in a 6-month course developing real-world projects using React, Next.js, Tailwind CSS, TypeScript, and MongoDB.",
      "Learned about the latest features and best practices in React, Next.js, and TypeScript.",
    ],
    gradientClasses: "bg-gradient-to-b from-gradient-blue to-gradient-green/10",
  },
];

const Experience = () => {
  return (
    <SectionWrapper>
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
              className="flex lg:grid gap-5 w-full mt-4 lg:grid-cols-9 relative lg:h-90"
            >
              <div
                className={`${
                  isEven ? "lg:col-start-6" : "lg:col-start-1"
                } lg:col-span-4 p-7 w-full h-fit flex flex-col rounded-xl bg-gray-800 border border-gray-700`}
              >
                <h3 className="text-3xl font-semibold text-white">
                  {experience.position}
                </h3>
                <div className="mt-3.5 flex gap-5">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/calendar.png"
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span className="text-lg text-gray-100">
                      {experience.duration}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/location.png"
                      alt="calendar"
                      width={20}
                      height={20}
                    />
                    <span className="text-lg text-gray-100">
                      {experience.location}
                    </span>
                  </div>
                </div>
                <em className="text-gray-200 font-medium mt-6">
                  Responsibilities
                </em>
                <ul className="mt-3 gap-2 flex flex-col">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-gray-100 flex">
                      <div className="h-1 w-1 mt-[11px] rounded-full bg-gray-100 mr-3 shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-1 lg:col-start-5 w-fit flex flex-col items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 relative">
                <div className="z-20 p-2.5 size-[70px] rounded-full bg-gray-800 border border-gray-700">
                  <Image
                    src={experience.icon}
                    alt={experience.company}
                    width={50}
                    height={50}
                    className="shrink-0"
                  />
                </div>
                <span
                  className={`z-10 border-l absolute lg:flex h-full translate-y-10 w-0.5 lg:h-[350px] ${experience.gradientClasses}`}
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
