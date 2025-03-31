import Label from "./Label";
import Image from "next/image";

const iconMap = {
  services: "/icons/dart.png",
  skills: "/icons/spanner.png",
};

const SectionHeading = ({
  heading,
  subHeading,
  icon,
}: {
  heading: string;
  subHeading: string;
  icon: keyof typeof iconMap;
}) => {
  return (
    <>
      <Label>
        {" "}
        <Image src={iconMap[icon]} alt="dart icon" width={20} height={17} />
        {heading}
      </Label>
      <h2 className="mt-4 text-5xl font-semibold text-white">{subHeading}</h2>
    </>
  );
};

export default SectionHeading;
