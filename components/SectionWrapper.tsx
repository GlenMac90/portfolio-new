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
      className="mt-20 lg:mt-16 flex flex-col items-center justify-center p-6 lg:p-13"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
