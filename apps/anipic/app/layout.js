// /app/layout.js

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { BalanceProvider } from "@shared/components/context/BalanceContext";
import Navbar from "@shared/components/navigation/Navbar";
import NoScriptWarning from "@shared/components/errors/NoScriptWarning";
import Footer from "@/components/Footer";
import Wave from "@shared/components/Wave";
import Script from "next/script";
import ErudaScript from "@shared/components/Eruda";
import ToastProvider from "@shared/components/context/ToastProvider";
import SlideBar from "@/components/navigations/SlideBar";

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
        {process.env.NODE_ENV == "production" && (
          <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-RFXNWC90EH"
            ></Script>
            <Script id="googletagmanager-G-RFXNWC90EH">
              {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-RFXNWC90EH');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Anix7 Tools",
              url: baseUrl,
              publisher: {
                "@type": "Organization",
                name: "Anix7 Tools",
                logo: {
                  "@type": "ImageObject",
                  url: `${baseUrl}/assets/img/logo.png`,
                },
              },
            }),
          }}
        />

        <Script id="theme-loader" strategy="beforeInteractive">
          {`
          (function () {
            try {
              var mode = localStorage.getItem("themeMode");
              var isSystem = mode === "system";
              if (!mode) {
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                mode = systemPrefersDark ? "dark" : "light";
                isSystem = true;
                localStorage.setItem("themeMode", "system");
              } else if (isSystem) {
                var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                mode = systemPrefersDark ? "dark" : "light";
              }

              document.body.classList.toggle("dark", mode === "dark");
              document.body.classList.toggle("system", isSystem);

              var colorClass = localStorage.getItem("themeColor");
              if (colorClass) {
                document.body.classList.remove(
                  ...(document.body.className.match(/theme\\d+/g) || [])
                );
                document.body.classList.add(colorClass);
              }

              // set theme color meta tag

              const themeColorMap = [
                "#482dff",
                "#D32F2F",
                "#00796B",
                "#1565C0",
                "#FFC107",
                "#C2185B",
                "#E64A19",
                "#455A64",
                "#5D4037",
                "#7B1FA2",
                "#283593",
              ];
              
              const themeColor = mode === "dark" ? "#1d1d1d" : colorClass ? themeColorMap[colorClass.split("theme")[1]] : "#fffdfc";

                if (themeColor) {
                  let themeMeta = document.querySelector("meta[name='theme-color']");
                  if (!themeMeta) {
                    themeMeta = document.createElement("meta");
                    themeMeta.name = "theme-color";
                    document.head.appendChild(themeMeta);
                  }
                  themeMeta.setAttribute("content", themeColor);
                }
             
            } catch (e) {
              console.error("Theme load failed:", e);
            }
          })();
        `}
        </Script>
      </head>
      <body
        className="oneGrd MN-2 mobS hdMn bD onIndx onHm"
        suppressHydrationWarning
      >
        <SessionProvider>
          <BalanceProvider>
            <div className="mainWrp">
              <Navbar appName="AniPic" appSubName="by Anix7" />
              <div className="flex">
                <SlideBar />
                <div className="blogCont">
                  <div className="px-5 md:px-6 mx-auto max-w-(--breakpoint-xl)">
                    <NoScriptWarning />
                    <main>{children}</main>
                    <Footer />
                  </div>
                </div>
                <Wave />
              </div>

              {process.env.NODE_ENV === "development" && <ErudaScript />}
            </div>
            <ToastProvider />
          </BalanceProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
