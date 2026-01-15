"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={`w-full ${props.className || ""}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 sm:gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border shadow-lg shadow-primary/10 w-full min-w-[260px] max-w-[300px] sm:max-w-[320px] md:max-w-xs"
                  key={i}
                >
                  <div className="text-xs sm:text-sm md:text-base leading-relaxed">
                    {text}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 mt-4 md:mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-9 w-9 md:h-10 md:w-10 rounded-full flex-shrink-0 object-cover"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="font-medium tracking-tight leading-tight text-xs sm:text-sm md:text-base truncate">
                        {name}
                      </div>
                      <div className="leading-tight opacity-60 tracking-tight text-[10px] sm:text-xs md:text-sm truncate">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "",
    image: "",
    name: "",
    role: "",
  },
];
