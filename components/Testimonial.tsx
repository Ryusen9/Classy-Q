"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The craftsmanship on this timepiece is extraordinary. Every detail, from the dial to the clasp, exudes luxury. It's not just a watch—it's a statement.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    name: "Sophia Chen",
    role: "Collector",
  },
  {
    text: "I've owned many watches, but nothing compares to this one. The weight, the precision, the elegance—it's perfection on my wrist.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    name: "Marcus Johnson",
    role: "Entrepreneur",
  },
  {
    text: "Classy Q delivered beyond expectations. The watch arrived beautifully packaged, and the quality is unmatched. Worth every penny.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    name: "Isabella Martinez",
    role: "Fashion Designer",
  },
  {
    text: "This watch is a masterpiece. The automatic movement is flawless, and it looks stunning with both formal and casual attire. Highly recommend.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    name: "Alexander Wright",
    role: "Investment Banker",
  },
  {
    text: "I was skeptical about buying luxury watches online, but Classy Q made the experience seamless. The customer service was top-tier.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    name: "Emma Thompson",
    role: "Architect",
  },
  {
    text: "The attention to detail is phenomenal. From the sapphire crystal to the leather strap, everything screams quality. I couldn't be happier.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    name: "James Anderson",
    role: "CEO",
  },
  {
    text: "This is hands down the best watch I've ever owned. It's sophisticated, timeless, and gets compliments wherever I go.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    name: "Olivia Brown",
    role: "Marketing Director",
  },
  {
    text: "Classy Q has an incredible selection of timepieces. The one I purchased is elegant and durable—perfect for my lifestyle.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
    name: "Daniel Lee",
    role: "Software Engineer",
  },
  {
    text: "From browsing to checkout, the experience was flawless. The watch arrived quickly and exceeded all my expectations. Five stars!",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    name: "Ava Rodriguez",
    role: "Real Estate Agent",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonial = () => {
  return (
    <section className="bg-background my-10 md:my-20 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-8 md:mb-12"
        >
          <div className="flex justify-center">
            <div className="border py-1.5 px-4 rounded-lg text-xs sm:text-sm font-medium">
              Testimonials
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-4 md:mt-5 text-center px-4">
            What our customers say
          </h2>
          <p className="text-center mt-3 md:mt-5 opacity-75 text-sm sm:text-base px-4">
            Hear from collectors and enthusiasts who trust Classy Q for timeless
            elegance.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[500px] sm:max-h-[600px] md:max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
