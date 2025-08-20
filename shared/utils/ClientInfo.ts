"use client";
import { useState, useEffect } from "react";

export function useClientWidth() {
  const [clientWidth, setClientWidth] = useState(320);

  useEffect(() => {
    const handleResize = () => {
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return clientWidth;
}
