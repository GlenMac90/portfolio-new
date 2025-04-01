import Button from "./Button";

const Navbar = () => {
  const navLinks = ["Works", "Skills", "Experience", "Testimonials"];

  return (
    <nav className="sticky top-0 z-50 flex justify-between h-22 rounded-2xl items-center bg-gray-800 w-full max-w-7xl p-8">
      <span className="bg-clip-text text-xl font-semibold text-transparent bg-gradient-to-b from-purple-100 to-purple-200">
        GlenM
      </span>
      <div className="gap-10 hidden lg:flex">
        {navLinks.map((link) => (
          <span className="text-gray-100 text-xl" key={link}>
            {link}
          </span>
        ))}
      </div>
      <Button>Contact Me</Button>
    </nav>
  );
};

export default Navbar;
