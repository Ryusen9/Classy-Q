"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Smile, Watch, MapPin, ShieldCheck } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  {
    key: "customers",
    label: "Happy Customers",
    target: 35000,
    suffix: "",
    icon: Smile,
  },
  {
    key: "stock",
    label: "Watches in Stock",
    target: 1200,
    suffix: "",
    icon: Watch,
  },
  {
    key: "cities",
    label: "Cities Served",
    target: 25,
    suffix: "",
    icon: MapPin,
  },
  {
    key: "auth",
    label: "Authenticity Guarantee",
    target: 100,
    suffix: "%",
    icon: ShieldCheck,
  },
];

const StatHome = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animate numbers when the section enters the viewport
  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLSpanElement>(".stat-value");

      elements.forEach((el) => {
        const target = Number(el.dataset.target || 0);
        const suffix = el.dataset.suffix || "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 3.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            const v = Math.floor(counter.value);
            el.textContent = `${v.toLocaleString()}${suffix}`;
          },
        });
      });

      // Card entrance animation
      gsap.from(".stat-card", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-neutral-950 py-10 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Classy Q at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {stats.map(({ key, label, target, suffix, icon: Icon }) => (
            <div
              key={key}
              className="stat-card group rounded-xl border border-neutral-800/70 bg-neutral-900/40 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-neutral-700 hover:bg-neutral-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-2 text-neutral-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="text-sm font-medium text-neutral-300">{label}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span
                  className="stat-value text-3xl font-bold tracking-tight md:text-4xl"
                  data-target={target}
                  data-suffix={suffix}
                  aria-label={`${label} value`}
                >
                  0
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatHome;
