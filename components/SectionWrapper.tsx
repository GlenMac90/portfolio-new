const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-20 lg:mt-34 flex flex-col items-center justify-center">
      {children}
    </section>
  );
};

export default SectionWrapper;
