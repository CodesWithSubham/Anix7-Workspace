// /components/Eruda.js
'use client';

import Script from 'next/script';

export default function ErudaScript() {
  const handleErudaLoad = () => {
    // Initialize Eruda only after the script has loaded
    if (typeof eruda !== 'undefined') {
      eruda.init();
    } else {
      console.error('Eruda is not defined');
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
