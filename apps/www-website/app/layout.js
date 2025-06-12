import "./globals.css";
import { Inter } from "next/font/google";
import Eruda from "@shared/components/Eruda";
import ToastProvider from "@shared/components/context/ToastProvider";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import Footer from "@/components/Footer";
import Navbar from "@shared/components/navigation/Navbar";
import NoScriptWarning from "@shared/components/errors/NoScriptWarning";
import ScrollToTopButton from "@shared/components/ScrollToTopButton";
import { BalanceProvider } from "@shared/components/context/BalanceContext";
import Wave from "@shared/components/Wave";
import SlideBar from "@/components/navigations/SlideBar";

// Load Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Best for avoiding layout shift
});
const baseUrl = process.env.BASE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Anix7 - Explore Tools, Anime, Games, and Stunning Visuals",
    template: "%s - Anix7",
  },
  description:
    "Anix7 is your all-in-one hub for smart tools, anime updates, 4K wallpapers, mini games and nature photography. Discover, create, and download with ease.",
  keywords: ["Anix7"],
  author: "Anix7",
  openGraph: {
    url: "/",
    siteName: "Anix7",
    images: [
      {
        url: `/assets/img/logo/anix7-logo-512.jpg`,
        // width: 1200,
        // height: 630,
        width: 512,
        height: 512,
        alt: "Anix7 Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/img/logo/anix7-logo-512.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {process.env.NODE_ENV == "production" && (
          <>
            {/* <!-- Google tag (gtag.js) --> */}
            {/* <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-RFXNWC90EH"
            ></Script> */}
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
                name: "Anix7",
                url: "https://www.anix7.in",
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
      <body suppressHydrationWarning>
        <div className="absolute w-48 h-56 bg-neutral-500/5 dark:bg-black/15 -z-10 top-0 right-0 rounded-bl-full" />
        <SessionProvider>
          <BalanceProvider>
            <Navbar appName="Anix7" />
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

            {process.env.NODE_ENV === "development" && <Eruda />}

            <ToastProvider />
          </BalanceProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
