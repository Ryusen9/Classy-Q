"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BiCollection } from "react-icons/bi";
import Link from "next/link";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        contentRef.current?.querySelectorAll("[data-animate]") || []
      );

      gsap.set(items, { autoAlpha: 0, y: 28, filter: "blur(6px)" });

      gsap.timeline({ defaults: { ease: "power3.out" } }).to(items, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
        stagger: 0.12,
      });

      if (showcaseRef.current) {
        gsap.to(showcaseRef.current, {
          y: -8,
          scale: 1.01,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-center bg-cover bg-fixed bg-no-repeat flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85"
        aria-hidden
      />

      <div
        className="absolute -left-24 top-6 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-2 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_25%)]"
        aria-hidden
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center"
      >
        <div className="space-y-6 text-center md:text-left">
          <div
            data-animate
            className="inline-flex mt-10 lg:mt-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200"
          >
            Signature Edition
            <span className="h-1 w-1 rounded-full bg-emerald-200" aria-hidden />
            Curated Luxury
          </div>

          <h1
            data-animate
            className="font-work-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] drop-shadow-2xl"
          >
            Timeless Statements for Modern Collectors
          </h1>

          <p
            data-animate
            className="max-w-2xl text-lg text-gray-200/90 md:text-xl"
          >
            Explore an elevated portfolio of heritage-inspired timepieces,
            sculpted metal bracelets, and minimalist silhouettes designed to
            command attention.
          </p>

          <div
            data-animate
            className="flex flex-col sm:flex-row items-center justify-center md:items-start gap-4 pt-2"
          >
            <Link href={"/category"}>
              <button className="bg-gradient-to-r from-emerald-400 to-cyan-300 hover:from-emerald-300 hover:to-cyan-200 text-black font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 shadow-xl shadow-emerald-400/30 transition-transform duration-200 hover:-translate-y-0.5">
                View Collection <BiCollection />
              </button>
            </Link>
            <button className="border border-white/25 text-white px-7 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-200">
              Explore Lookbook
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-animate>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">
              <div className="text-3xl font-bold text-white">180+</div>
              <div className="text-sm text-gray-300">Curated SKUs</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-sm text-gray-300">Client Rating</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left">
              <div className="text-3xl font-bold text-white">48h</div>
              <div className="text-sm text-gray-300">Insured Dispatch</div>
            </div>
          </div>
        </div>

        <div
          ref={showcaseRef}
          className="relative mx-auto w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-[0_30px_120px_-60px_rgba(0,0,0,0.85)]"
          data-animate
        >
          <div
            className="absolute inset-0 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/40">
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-300/15 via-transparent to-cyan-300/20"
              aria-hidden
            />
            <div
              className="aspect-[5/5] bg-[url('/Photos/HeroBg.png')] bg-cover bg-center"
              aria-hidden
            />
          </div>
          <div className="relative mt-5 flex flex-col md:flex-row items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
            <div>
              <div className="text-sm text-center md:text-left uppercase tracking-[0.22em] text-emerald-200">
                New Drop
              </div>
              <div className="text-lg text-center md:text-left font-semibold">
                Carbon Lunar GMT
              </div>
              <div className="text-sm text-center md:text-left text-gray-300">
                Forged carbon bezel, sapphire crystal
              </div>
            </div>
            <div className="rounded-xl bg-black/50 px-3 py-2 text-right border border-white/10">
              <div className="text-xs text-center text-gray-300">Starting</div>
              <div className="text-lg font-bold">4,500 ৳</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
