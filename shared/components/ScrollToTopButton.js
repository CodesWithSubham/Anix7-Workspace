"use client";

import { useEffect, useState } from "react";
import { CircleUpSvg } from "./svg/DirectionSvg";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
      className="fixed bottom-17 right-4 rounded-full bg-white dark:bg-neutral-800 p-1.5 cursor-pointer text-(--linkC) transition-all z-[60] hover:shadow-lg dark:hover:shadow dark:shadow-green-500"
    >
      <CircleUpSvg className="w-6 h-6"/>
    </button>
  );
}
