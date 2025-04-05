const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-13"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
