// /components/Eruda.js
"use client";

import Script from "next/script";
// declare global variable for eruda
declare global {
  interface Window {
    eruda: any;
  }
}

export default function ErudaScript() {
  const handleErudaLoad = () => {
    // Initialize Eruda only after the script has loaded
    if (typeof window.eruda !== "undefined") {
      window.eruda.init();
    } else {
      console.error("Eruda is not defined");
    }
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/eruda"
        strategy="afterInteractive"
        onLoad={handleErudaLoad}
      />
    </>
  );
}
