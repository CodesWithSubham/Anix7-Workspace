// /app/page.js

import Image from "next/image";
import MobileMenu from "@shared/components/navigation/MobileMenu";
import { ShadowBox, WorkBox } from "@shared/components/ui/Boxes";
import { IfLoggedIn, IfLoggedOut } from "@shared/components/auth/LoggedInWrapper";
import { Button } from "@shared/components/ui/Button";
import Link from "next/link";

export const metadata = { alternates: { canonical: "/" }, addToSitemap: true };

export default function Home() {
  const keyFeatures = [
    {
      title: "URL Shortener",
      description: "Shorten long URLs from various platforms and share them effortlessly",
      image: "/assets/img/link.png",
      link: "/url-shortener",
    },
    {
      title: "QR Code Generator",
      description: "Generate fully customized QR Codes with colors, shapes, and logos.",
      image: "/assets/img/mobile-qr.png",
      link: "/qr-code-generator",
    },
    {
      title: "Bulk Image Resizer",
      description:
        "Free online image resizer — resize PNG, JPG, WebP, and more formats in bulk, quickly and securely.",
      image: "/assets/img/image-resize-logo.png",
      link: "/bulk-image-resizer",
    },
    {
      title: "Image Uploading",
      description:
        "Upload images up to 10MB, get a shareable public link, and access your uploads anytime.",
      image: "/assets/img/gallery.png",
      link: "/image-uploading",
    },
  ];

  return (
    <>
      <section className="relative p-5 text-center mb-4 md:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Welcome to Anix7 Tools
        </h1>
        <p className="sm:text-md md:text-lg lg:text-xl mb-6 text-center">
          Simplify your digital workflow with a powerful suite of online tools — from URL shorteners
          and QR code generators to image resizing, uploading, and more. Everything you need, all in
          one place.
        </p>

        <IfLoggedOut>
          <Button className="rounded-full py-3 px-[10%]" htmlFor="loginSignupCheckId">
            SignUp Now
          </Button>
        </IfLoggedOut>
      </section>

      <section className="py-10 px-4 text-center -mx-3 md:mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-8">
          {keyFeatures.map(({ title, description, image, link }, i) => (
            <Link href={link} className="hover:scale-102 transition-all duration-500" key={i}>
              <ShadowBox className="flex h-full flex-row items-center gap-4 p-4 hover:shadow-[0px_3px_10px_rgba(0,0,0,.20),_inset_20px_20px_18px_rgba(0,0,0,.07),_inset_-20px_-20px_18px_rgba(255,255,255,.9)] dark:hover:shadow-[0px_-1px_10px_rgba(255,255,255,.10),inset_20px_20px_18px_rgba(0,0,0,.9),_inset_-20px_-20px_18px_rgba(255,255,255,.07)] ">
                {image && (
                  <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={image}
                      alt={title || "Feature Image"}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full"
                      priority={i === 0 || i === 1} // Only 1st & 2nd item prioritized
                    />
                  </div>
                )}
                <div className="text-left">
                  {title && <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>}
                  {description && (
                    <p className="text-sm text-gray-600 dark:text-gray-200">{description}</p>
                  )}
                </div>
              </ShadowBox>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent text-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Go Pro for an Enhanced Experience
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Subscribe to our Pro plan to remove ads and unlock premium features
            such as unlimited uploads, faster URL shortening, and more.
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-lg mb-6">
              Free with ads, access to core features.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full w-full">
              Subscribe Now
            </button>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-xs text-center">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-lg mb-6">
              No ads, premium features, faster uploads, and unlimited access.
            </p>
            <button className="px-6 py-3 bg-green-500 text-white rounded-full w-full">
              Get Pro
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            {
              title: "Step 1: Choose a Tool",
              description:
                "Select from our tools to shorten URLs, upload images, generate custom QR codes or any other tools.",
            },
            {
              title: "Step 2: Customize",
              description:
                "Easily customize your links, images, QR codes or what you choose with various options and settings.",
            },
            {
              title: "Step 3: Share & Access",
              description:
                "Share your content instantly with shareable links, and access your uploads anytime from anywhere.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] max-w-sm sm:basis-[calc(50%-1rem)] md:basis-[calc(33.333%-1rem)] border rounded-lg px-4 py-5 bg-background/80 shadow-xs hover:shadow-md transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="mb-4">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-transparent text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Our Users Say
        </h2>
        <div className="flex justify-center gap-16">
          <div className="bg-white shadow-lg p-8 rounded-lg max-w-xs text-center">
            <p className="text-lg italic mb-4">
              "Anix7 Tools is a lifesaver! I can quickly shorten URLs and
              generate QR codes without any hassle."
            </p>
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-gray-500">Marketing Specialist</p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg max-w-xs text-center">
            <p className="text-lg italic mb-4">
              "I love the image uploading feature. It's simple, fast, and
              perfect for sharing with my team."
            </p>
            <h4 className="text-xl font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Photographer</p>
          </div>
        </div>
      </section> */}

      <IfLoggedOut>
        <WorkBox className="mt-14 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg mb-6">
            Sign up today and unlock the full potential of Anix7 Tools!
          </p>

          <Button className="rounded-full py-3 px-[10%]" htmlFor="loginSignupCheckId">
            SignUp Now
          </Button>
        </WorkBox>
      </IfLoggedOut>
      <IfLoggedIn>
        <MobileMenu />
      </IfLoggedIn>
    </>
  );
}
