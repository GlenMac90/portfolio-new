"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const servicesData = [
  {
    icon: "/icons/react-icon.png",
    title: "React Development",
    description:
      "Highly experienced with building scalable and efficient web applications using React and Next.js",
  },
  {
    icon: "/icons/ruler.png",
    title: "UI/UX Design",
    description:
      "I focus on making interfaces easy to use and visually appealing for a better user experience.",
  },
  {
    icon: "/icons/monitor.png",
    title: "Front-End Development",
    description:
      "I create responsive and functional web interfaces that work seamlessly across multiple devices.",
  },
  {
    icon: "/icons/server.png",
    title: "Back-End Development",
    description:
      "I handle server-side logic and data management to ensure reliable application performance.",
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        heading="Bringing Your Ideas To Life"
        subHeading="How I Can Help You Achieve Your Goals"
        icon="services"
      />
      <div className="mt-15 grid gap-2.5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            key={service.title}
            className="px-6 py-7 flex flex-col rounded-xl bg-gray-800"
          >
            <div className="rounded-lg p-3.5 bg-purple-300 border border-purple-200/20 flex w-fit">
              <Image
                src={service.icon}
                alt={service.title}
                width={28}
                height={28}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm text-gray-100">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
