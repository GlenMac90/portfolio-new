"use client";

import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Testimonials", id: "testimonials" },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 w-full flex justify-center">
      <div className="flex justify-between items-center w-full max-w-7xl py-8 px-4 sm:px-6 lg:px-13 h-22">
        <button
          onClick={handleScrollTop}
          className="cursor-pointer bg-clip-text text-xl font-semibold text-transparent bg-gradient-to-b from-purple-100 to-purple-200"
        >
          GlenM
        </button>
        <div className="gap-10 hidden sm:flex">
          {navLinks.map(({ label, id }) => (
            <button
              className="cursor-pointer bg-gray-100 lg:text-xl bg-clip-text text-transparent hover:bg-gradient-to-b hover:from-purple-100 hover:to-purple-200 transition-all duration-300"
              key={id}
              onClick={() => handleScroll(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <Link
          target="_blank"
          href="/glen-mccallum-resume.pdf"
          className="flex py-2.5 lg:py-3 whitespace-nowrap px-6 lg:px-8 items-center justify-center rounded-lg font-medium bg-gradient-to-b from-purple-100 to-purple-200 to-50% text-white"
        >
          Download CV
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
