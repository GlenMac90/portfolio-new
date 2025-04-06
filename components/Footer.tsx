import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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

const Footer = () => {
  return (
    <footer className="mt-10 lg:mt-25 flex flex-col sm:flex-row w-full justify-between items-center py-5 gap-5 p-6 lg:p-13">
      <div className="flex gap-5">
        {mediaLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 shrink-0 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-xl text-white"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Glen McCallum. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
