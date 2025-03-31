const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex py-3 whitespace-nowrap px-8 items-center justify-center rounded-lg font-medium bg-gradient-to-b from-purple-100 to-purple-200 text-medium text-white ">
      {children}
    </button>
  );
};

export default Button;
