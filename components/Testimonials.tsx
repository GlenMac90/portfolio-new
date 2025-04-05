"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";

const testimonialsData = [
  {
    name: "Adrian Hajdin",
    title: "Founder & CEO at JS Mastery",
    text: "Glen has proven to be an asset to any development team he joins. He has an upbeat demeanour, is extremely receptive to feedback, and has an innate skill for building animations that bring a plus to any project he works in. He is an asset to any development team he works in.",
    image: "/testimonials/adrian.png",
  },
  {
    name: "Taehong Min",
    title: "Web Developer and teammate",
    text: "I have had the pleasure of working with Glen on web application projects. He is a skilled and reliable web developer who can deliver high-quality results. He has a deep understanding of web technologies and best practices, and he always strives to improve his work. He is also a great team player who communicates well and collaborates effectively. I highly recommend him for any web development project.",
    image: "/testimonials/taehong.png",
  },
  {
    name: "Santiago Laight",
    title: "Full Stack Developer",
    text: "Any team that Glen is part of instantly shines brighter. He has a contagious calming and fun presence that help create an atmosphere where teams can thrive. His contributions aren’t just limited to positive vibes — he has a remarkable talent for crafting animations that breathe life into web apps and a solid set of skills that make him a great software developer. Any company or team would undoubtedly benefit from having Glen onboard.",
    image: "/testimonials/santiago.png",
  },
  {
    name: "Faizan Siddiqui",
    title: "Lead Designer @JavaScript Mastery",
    text: "I’ve worked with Glen on several projects where I handled the design, and he perfectly brings it to life through development. He has a great eye for detail and always ensures everything runs smoothly. What I appreciate most is how well we collaborate—he takes the time to fully understand the concept and makes sure everything works as it should. Glen’s problem-solving skills, easygoing nature, and positive attitude add a lot to the team. I look forward to working together again!",
    image: "/testimonials/faizan.png",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        heading="Customer Feedback Highlights"
        subHeading="What My Clients And Colleagues Say"
        icon="experience"
      />
      <div className="mt-15 gap-x-6 gap-y-5 w-full columns-1 lg:columns-2 [column-fill:_balance]">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col p-7 rounded-lg bg-gray-800 gap-4.5 mb-5 break-inside-avoid-column"
          >
            <p className="text-gray-100 text-lg">{testimonial.text}</p>
            <div className="flex w-full items-center justify-between flex-wrap">
              <div className="gap-2.5 flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={46}
                  height={46}
                  className="rounded-full shrink-0"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-100 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <Image
                src="/icons/stars.png"
                alt="quote"
                width={124}
                height={18}
                className="mt-1"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
