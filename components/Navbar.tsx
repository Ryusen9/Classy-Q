"use client";
import { useEffect, useRef } from "react";
import CardNav from "./CardNav";
import NavHeader from "./NavHeader";
import gsap from "gsap";
// import logo from "/logo_white_main.png";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          href: "/about/company",
          ariaLabel: "About Company",
        },
        {
          label: "Products",
          href: "/about/products",
          ariaLabel: "About Products",
        },
      ],
    },
    {
      label: "Categories",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Menswear",
          href: "/category/menswear",
          ariaLabel: "Menswear Category",
        },
        {
          label: "Womenswear",
          href: "/category/womenswear",
          ariaLabel: "Womenswear Category",
        },
        {
          label: "Trending",
          href: "/category/trending",
          ariaLabel: "Trending Category",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:hello@example.com",
          ariaLabel: "Email us",
        },
        {
          label: "Facebook",
          href: "https://facebook.com/yourhandle",
          ariaLabel: "Facebook",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/yourhandle",
          ariaLabel: "Instagram",
        },
      ],
    },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.set(nav, { yPercent: 0, opacity: 1 });
    let lastY = window.scrollY;
    const threshold = () => window.innerHeight * 0.35;
    let hidden = false;
    const hide = () => {
      if (hidden) return;
      hidden = true;
      gsap.to(nav, {
        yPercent: -150,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    const show = () => {
      if (!hidden) return;
      hidden = false;
      gsap.to(nav, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > threshold()) {
        hide();
      } else {
        show();
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div ref={navRef} className="fixed top-0 left-0 w-full z-50">
      <NavHeader />
      <div>
        <CardNav
          logo={"/logo_black.png"}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
    </div>
  );
};
export default Navbar;
