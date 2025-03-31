const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className="bg-gray-700 rounded-full py-2.5 px-5 gap-4 flex text-sm font-medium text-white w-fit">
      {children}
    </label>
  );
};

export default Label;
