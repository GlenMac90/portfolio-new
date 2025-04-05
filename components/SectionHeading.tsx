"use client";

import Label from "./Label";
import Image from "next/image";
import { motion } from "framer-motion";

const iconMap = {
  services: "/icons/dart.png",
  skills: "/icons/spanner.png",
  experience: "/icons/briefcase.png",
};

const SectionHeading = ({
  heading,
  subHeading,
  icon,
}: {
  heading: string;
  subHeading: string;
  icon: keyof typeof iconMap;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center"
    >
      <Label>
        {" "}
        <Image src={iconMap[icon]} alt="dart icon" width={20} height={17} />
        {heading}
      </Label>
      <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-white text-center">
        {subHeading}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
