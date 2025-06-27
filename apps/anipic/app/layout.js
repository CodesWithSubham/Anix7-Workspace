// /app/layout.js

import "./globals.css";
import Navbar from "@shared/components/navigation/Navbar";
import NoScriptWarning from "@shared/components/errors/NoScriptWarning";
import Footer from "@/components/Footer";
import Wave from "@shared/components/Wave";
import SlideBar from "@/components/navigations/SlideBar";
import ScrollToTopButton from "@shared/components/ScrollToTopButton";
import DefaultHead from "@shared/head";
import Providers from "@shared/providers";

const baseUrl = process.env.BASE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl),
  // alternates: {
  //   canonical: "",
  // },
  title: {
    default: "Anix7 Tools - Free Online Tools for Everyday Tasks",
    template: "%s - Anix7 Tools",
  },
  description:
    "Anix7 Tools is your go-to hub for free online utilities. URL Shortener, QR Code Generator, Image Resizing or Uploading, and many more — all in one place.",
  keywords: [
    "Anix7 Tools",
    "online tools",
    "free tools",
    "URL shortener",
    "QR code generator",
    "image uploader",
    "image resizer",
    "image tools",
    "fast URL shortener",
    "secure image hosting",
    "share images online",
    "resize images online",
    "generate QR codes",
    "convert links to QR",
  ],
  author: "Anix7 Tools",
  openGraph: {
    url: "/",
    siteName: "Anix7 Tools",
    images: [
      {
        url: `/assets/img/logo.png`,
        width: 1200,
        height: 630,
        alt: "Anix7 Tools Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [`/assets/img/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <DefaultHead />
      </head>
      <body suppressHydrationWarning>
        <div className="absolute w-48 h-56 bg-neutral-500/5 dark:bg-black/15 -z-10 top-0 right-0 rounded-bl-full" />
        <Providers>
          <Navbar appName="Tools" appSubName="Beta" />
          <div className="flex">
            <SlideBar />
            <div className="grow pt-5 md:pt-7 relative transition-all duration-300 md:w-[calc(100%-224px)] border-l border-white/30">
              <div className="px-5 md:px-6 mx-auto max-w-(--breakpoint-xl)">
                <main>
                  <NoScriptWarning />
                  {children}
                </main>
                <ScrollToTopButton />
                <Footer />
              </div>
            </div>
            <Wave />
          </div>
        </Providers>
      </body>
    </html>
  );
}
