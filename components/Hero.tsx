"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

import Label from "@/components/Label";
import Button from "@/components/Button";
import AnimatedComputerGraphic from "./AnimatedComputerGraphic";

const mediaLinks = [
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/GlenMac90",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/glenmccallum",
  },
  {
    name: "Email",
    icon: <HiOutlineMail />,
    link: "mailto:glen.mccallum@live.co.uk",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:mt-3 flex flex-col lg:flex-row w-full justify-between gap-4 lg:gap-4 sm:p-6 p-4 lg:p-13 overflow-hidden"
    >
      <motion.div
        className="flex flex-col gap-5 w-full"
        initial={{ x: "-25%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Label>
          <Image
            src="/label-icons/brain.png"
            alt="brain icon"
            width={20}
            height={17}
          />
          Full Stack Developer
        </Label>

        <h1 className="lg:text-[64px] lg:leading-[72px] sm:text-[48px] sm:leading-[56px] text-[40px] leading-[48px] font-semibold text-white">
          Professional Web Developer
        </h1>
        <span className="text-gray-100 lg:text-lg">
          Hi, I&apos;m Glen, a developer building solutions to grow your
          business.
        </span>
        <div className="flex gap-6">
          <div className="hidden md:flex gap-6">
            <Button>
              Let&apos;s Connect{" "}
              <Image
                src="/icons/right-arrow.png"
                alt="right arrow"
                width={20}
                height={20}
                className="ml-1"
              />
            </Button>
            <span className="border-r-2 border-gray-700 h-full" />
          </div>
          <div className="flex w-full gap-4">
            {mediaLinks.map((link, index) => (
              <motion.div
                className="flex hover:scale-110 hover:rotate-5 transition-all duration-200"
                key={link.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.7 }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.link}
                  className="p-3 lg:p-4 rounded-[10px] text-white bg-gray-700 text-2xl"
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex w-full rounded-xl lg:max-w-xl max-w-2xl self-center"
        initial={{ x: "10rem", opacity: 0 }}
        animate={{ x: "0rem", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AnimatedComputerGraphic />
      </motion.div>
    </section>
  );
};

export default Hero;
