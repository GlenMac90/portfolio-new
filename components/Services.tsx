import Image from "next/image";

import SectionHeading from "./SectionHeading";

const servicesData = [
  {
    icon: "/icons/react-icon.png",
    title: "React Development",
    description:
      "Highly experienced with building scalable and efficient web applications using React and Next.js",
  },
  {
    icon: "/icons/ruler.png",
    title: "UI/UX Design",
    description:
      "I focus on making interfaces easy to use and visually appealing for a better user experience.",
  },
  {
    icon: "/icons/monitor.png",
    title: "Front-End Development",
    description:
      "I create responsive and functional web interfaces that work seamlessly across multiple devices.",
  },
  {
    icon: "/icons/server.png",
    title: "Back-End Development",
    description:
      "I handle server-side logic and data management to ensure reliable application performance.",
  },
];

const Services = () => {
  return (
    <section className="mt-40 flex flex-col items-center justify-center">
      <SectionHeading
        heading="Bringing Your Ideas To Life"
        subHeading="How I Can Help You Achieve Your Goals"
        icon="services"
      />
      <div className="mt-15 flex gap-2.5">
        {servicesData.map((service) => (
          <div
            key={service.title}
            className="px-6 py-7 flex flex-col rounded-xl bg-gray-800/60"
          >
            <div className="rounded-lg p-3.5 bg-purple-300 flex w-fit">
              <Image
                src={service.icon}
                alt={service.title}
                width={28}
                height={28}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm text-gray-100">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
