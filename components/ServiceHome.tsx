"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { Contact } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceHome = () => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const refs = [card1Ref, card2Ref, card3Ref, card4Ref];
    refs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index === 1 || index === 3 ? 0.3 : 0,
            ease: "elastic.out(1, 0.5)",
          }
        );
      }
    });
  });
  return (
    <section className="my-8 font-work-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Content 1 */}
        <div className="p-6 flex flex-col justify-between items-start border-l-4 border-black">
          <h2 className="font-work-sans text-3xl font-semibold">
            What services do we offer?
          </h2>
          <p className="text-sm text-gray-600">
            We provide a range of services including custom watch design,
            repairs, and maintenance to ensure your timepiece remains in perfect
            condition.
          </p>
          <div className="flex items-start justify-center gap-4 mt-5">
            <Button>
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
        {/* Content 2 */}
        <div className="grid grid-cols-1 grid-rows-2 px-8 gap-3 md:gap-1">
          {/* card 1 */}
          <div ref={card1Ref}>
            <div className="flex items-center justify-start gap-2">
              <div className="p-2 bg-black text-white rounded-xl flex gap-2 items-center justify-start">
                <TbTruckDelivery size={30} />
              </div>
              <p className="text-2xl px-1">Fast Delivery</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 px-1">
              Get your orders delivered quickly and reliably with our efficient
              shipping services.{" "}
            </p>
          </div>
          {/* card 2 */}
          <div ref={card2Ref}>
            <div className="flex items-center justify-start gap-2">
              <div className="p-2 bg-black text-white rounded-xl flex gap-2 items-center justify-start">
                <MdHighQuality size={30} />
              </div>
              <p className="text-2xl">Premium Quality</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 px-1">
              We ensure the highest quality standards in all our products and
              services.
            </p>
          </div>
        </div>
        {/* content 3 */}
        <div className="grid grid-cols-1 grid-rows-2 px-8">
          {/* card 1 */}
          <div ref={card3Ref}>
            <div className="flex items-center justify-start gap-2">
              <div className="p-2 bg-black text-white rounded-xl flex gap-2 items-center justify-start">
                <GiAutoRepair size={30} />
              </div>
              <p className="text-2xl">Expert Repairs</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 px-1">
              Our technicians provide expert repair services to keep your
              timepieces functioning flawlessly.
            </p>
          </div>
          {/* card 2 */}
          <div ref={card4Ref}>
            <div className="flex items-center justify-start gap-2">
              <div className="p-2 bg-black text-white rounded-xl flex gap-2 items-center justify-start">
                <Contact size={30} />
              </div>
              <p className="text-2xl">Customer Support</p>
            </div>
            <p className="text-sm text-gray-600 mt-2 px-1">
              Our dedicated customer support team is here to assist you with any
              inquiries or issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceHome;
