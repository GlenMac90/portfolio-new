import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Animation from "@/components/Animation";
import Label from "@/components/Label";
import Button from "@/components/Button";

const mediaLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
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
    <section className="mt-13 flex w-full justify-between gap-30">
      <div className="flex flex-col gap-5 w-full">
        <Label>
          <Image
            src="/label-icons/brain.png"
            alt="brain icon"
            width={20}
            height={17}
          />
          Full Stack Developer
        </Label>

        <h1 className="text-[64px] leading-[72px] font-semibold text-white">
          Professional Web Developer Based In Bulgaria
        </h1>
        <span className="text-gray-100 text-lg">
          Hi, I'm Glen, a developer building solutions to grow your business.
        </span>
        <div className="flex gap-6">
          <Button>
            Let's Connect{" "}
            <Image
              src="/icons/right-arrow.png"
              alt="right arrow"
              width={20}
              height={20}
              className="ml-1"
            />
          </Button>
          <span className="border-r-2 border-gray-800 h-full" />
          <div className="flex w-full gap-4">
            {mediaLinks.map((link) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={link.link}
                key={link.name}
                className="p-4 rounded-[10px] text-white bg-gray-700 text-2xl"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-fit rounded-xl bg-gray-800/60">
        <Animation />
      </div>
    </section>
  );
};

export default Hero;
