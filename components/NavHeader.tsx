"use client";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const handleHideFeature = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={`w-full bg-black relative text-white text-xs p-0.5 flex items-center justify-center gap-2 ${
        isVisible ? "flex" : "hidden"
      }`}
      onClick={handleHideFeature}
    >
      <p className="font-work-sans">
        <span className="font-medium underline">Sign Up</span> and enjoy 10% off
        your first purchase!
      </p>
      <div className="absolute right-10 cursor-pointer">
        <XIcon size={15} />
      </div>
    </div>
  );
};
export default NavHeader;
