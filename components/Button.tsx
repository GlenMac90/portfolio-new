const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex py-2.5 lg:py-3 whitespace-nowrap px-6 lg:px-8 items-center justify-center rounded-lg font-medium bg-gradient-to-b from-purple-100 to-purple-200 to-50% text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
