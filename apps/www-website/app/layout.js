import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
    <html lang="en">
      <body className=" relative">
        <NavBar />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
