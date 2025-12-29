"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { Contact, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ServiceHome = () => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const refs = [card1Ref, card2Ref, card3Ref, card4Ref];
    refs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
          }
        );
      }
    });
  }, []);

  const services = [
    {
      ref: card1Ref,
      icon: <TbTruckDelivery size={28} />,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and reliably with our efficient shipping services.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      id: 1,
    },
    {
      ref: card2Ref,
      icon: <MdHighQuality size={28} />,
      title: "Premium Quality",
      description:
        "We ensure the highest quality standards in all our products and services.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      id: 2,
    },
    {
      ref: card3Ref,
      icon: <GiAutoRepair size={28} />,
      title: "Expert Repairs",
      description:
        "Our technicians provide expert repair services to keep your timepieces functioning flawlessly.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      id: 3,
    },
    {
      ref: card4Ref,
      icon: <Contact size={28} />,
      title: "Customer Support",
      description:
        "Our dedicated customer support team is here to assist you with any inquiries or issues.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      id: 4,
    },
  ];

  return (
    <section className="relative py-20 font-work-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Hero Section */}
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Our Services
              </span>
            </div>

            <h2 className="font-work-sans text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent leading-tight">
              What services do we offer?
            </h2>

            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              We provide a range of services including custom watch design,
              repairs, and maintenance to ensure your timepiece remains in
              perfect condition.
            </p>

            <Link href="/services" className="inline-block">
              <Button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </Link>

            {/* Decorative element */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    1000+ Happy Customers
                  </p>
                  <p className="text-xs text-gray-500">Trusted worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                ref={service.ref}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-linear-to-br ${service.gradient} text-white rounded-xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`mt-4 flex items-center gap-2 text-transparent bg-linear-to-r ${service.gradient} bg-clip-text font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                  >
                    Learn More
                    <ArrowRight
                      className={`w-4 h-4 text-purple-600 transition-transform duration-300 ${hoveredCard === service.id ? "translate-x-1" : ""}`}
                    />
                  </div>
                </div>

                {/* Decorative corner element */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${service.gradient} opacity-10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceHome;
