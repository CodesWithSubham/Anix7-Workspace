// /app/page.js

import Image from "next/image";
import MobileMenu from "@shared/components/navigation/MobileMenu";
import Link from "next/link";
import { WorkBox } from "@shared/components/ui/Boxes";
import { Button } from "@shared/components/ui/Button";
import { IfLoggedIn, IfLoggedOut } from "@shared/components/auth/LoggedInWraper";

export const addToSitemap = true; // Add this page to Sitemap

// Utility function for random border-radius
const getRandomBorderRadius = () => {
  const getRandomPercentage = () =>
    `${Math.floor(Math.random() * (70 - 35 + 1) + 35)}%`;
  return `${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} /
          ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()} ${getRandomPercentage()}`;
};

// Reusable Feature Card component
const FeatureCard = ({ title, description, image, link, buttonText }) => (
  <div
    className="w-full max-w-80 aspect-square flex justify-center items-center shadow-[inset_20px_20px_20px_rgba(0,0,0,.05),_25px_35px_20px_rgba(0,0,0,.05),_25px_30px_30px_rgba(0,0,0,.05),_inset_-20px_-20px_25px_rgba(255,255,255,.9)] dark:shadow-[inset_20px_20px_20px_rgba(255,255,255,.05),_25px_35px_20px_rgba(255,255,255,.05),_25px_30px_30px_rgba(255,255,255,.05),_inset_-20px_-20px_25px_rgba(0,0,0,.9)] hover:rounded-full! transition-all duration-700"
    style={{ borderRadius: getRandomBorderRadius() }}
  >
    <div className="flex flex-col items-center text-center p-5">
      <div className="w-20 aspect-square flex justify-center items-center border-4 rounded-full border-double border-(--linkC)">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          priority
          className="w-3/4 hover:scale-105 transition-all duration-700"
        />
      </div>
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
      <Button href={link} className="rounded-full py-2.5">
        {buttonText}
      </Button>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* <section className="relative p-5 text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
          Welcome to Anix7 Tools
        </h1>
        <p className="sm:text-md md:text-lg lg:text-xl mb-6 text-center">
          Your one-stop platform for all your digital needs. URL Shortener, QR
          Code Generator, Image Resizing or Uploading, and many more — all in
          one place.
        </p>
        <IfLoggedOut>
          <Button
            className="rounded-full py-3 px-[10%]"
            htmlFor="loginSignupCheckId"
          >
            SignUp Now
          </Button>
        </IfLoggedOut>
      </section> */}


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

      {/* <section className="py-16 text-center">
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
      </section> */}

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

          <Button
            className="rounded-full py-3 px-[10%]"
            htmlFor="loginSignupCheckId"
          >
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
