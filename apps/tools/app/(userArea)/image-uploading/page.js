// /app/(userArea)/image-uploading/page.js

import Image from "next/image";
import ImageUploader from "./ImageUploader";
import { WorkBox } from "@shared/components/ui/Boxes";
import { IfLoggedIn, IfLoggedOut } from "@shared/components/auth/LoggedInWraper";
import { Button } from "@shared/components/ui/Button";

export const addToSitemap = true; // Add this page to Sitemap

export const metadata = {
  title: "Image Uploading - Generate a shareable URL",
  description:
    "Upload and share your favorite images with ease. Generate a shareable link and manage your images securely with Anix7 Tools.",
    keywords: [
      "image uploader",
      "upload images",
      "image hosting",
      "Anix7 Tools",
      "Anix7 Tools image uploader",
      "Anix7 image hosting",
      "Anix7 Tools image sharing",
      "image upload Anix7 Tools",
      "free image uploader",
      "online image hosting",
      "secure image sharing",
      "upload images Anix7",
      "share images Anix7 Tools",
      "image URL generator",
      "image hosting service Anix7",
      "photo storage Anix7 Tools",
      "image uploading and sharing",
      "easy image upload",
      "image hosting for websites",
      "upload and manage images Anix7",
      "cloud image storage Anix7",
      "Anix7 image link generator",
      "free image sharing",
      "share images online",
      "photo storage",
      "image hosting service",
      "image upload tool",
      "upload photos online",
      "image sharing platform",
      "secure image upload",
      "image storage solution",
      "image management",
      "cloud image upload",
      "image hosting website",
      "free photo storage",
      "image sharing website",
      "image upload service",
      "upload pictures online",
      "high-quality image upload",
      "image upload and share",
      "online image hosting",
      "easy image upload",
      "bulk image upload",
      "photo upload service",
      "secure photo upload",
      "private image sharing",
      "image upload with link",
      "shareable image URLs",
      "store images securely",
      "fast image uploading",
      "image upload for social media",
      "image upload for websites",
      "image link generator",
      "generate shareable image link",
      "online image storage",
      "upload photos for sharing",
      "image file hosting",
      "image hosting for websites",
      "upload and share images",
      "free image upload service",
      "image hosting for blogs",
      "cloud storage for images",
      "upload high-res images",
      "image upload for e-commerce",
      "image upload for marketing",
      "host and share images",
      "image upload platform",
      "free photo sharing site",
      "upload pictures for free",
      "image URL generator",
      "digital image storage",
      "free online image hosting",
      "secure image upload tool",
      "image sharing solution",
      "host images for websites"
    ],
    
  openGraph: {
    url: `/image-uploading`,
    siteName: "Anix7 Tools",
    images: [
      {
        url: `/assets/img/image-uploading-og.jpeg`,
        width: 1200,
        height: 630,
        alt: "Anix7 Tools Image Uploading",
      },
    ],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/image-uploading" },
};

const Drops = [
  {
    title: "Sign Up & Upload",
    description:
      "Create an account to start uploading images. Securely manage and access your uploads anytime.",
    image: "/assets/img/signup.png",
  },
  {
    title: "Upload & Share Instantly",
    description:
      "Easily upload images up to 10MB and receive a public link to share anywhere.",
    image: "/assets/img/upload.png",
  },
  {
    title: "Publicly Accessible Links",
    description:
      "Uploaded images are accessible via a unique URL, making sharing seamless.",
    image: "/assets/img/url.png",
  },
  {
    title: "Fast & Reliable Hosting",
    description:
      "Optimized for speed, ensuring quick uploads and effortless sharing.",
    image: "/assets/img/speed.png",
  },
  {
    title: "Secure Storage",
    description:
      "Your images are securely stored with encryption and access protection.",
    image: "/assets/img/secure.png",
  },
  {
    title: "Multi-Device Compatibility",
    description:
      "Upload and access images from your smartphone, tablet, or desktop.",
    image: "/assets/img/multi-device.png",
  },
];
export default async function ImageUploading() {
  return (
    <>
      <IfLoggedIn>
        <ImageUploader />
      </IfLoggedIn>

      <div className="my-5">
        <h2 className="font-bold text-center mb-4">
          Fast & Secure Image Upload
        </h2>
        <p className="text-center mb-6">
          Upload images up to 10MB, get a shareable public link, and access your
          uploads anytime.
        </p>
      </div>
      <div className="relative flex justify-center items-stretch flex-wrap gap-x-14 gap-y-16 mt-10">
        {Drops.map((drop, index) => (
          <div
            key={index}
            className="w-full max-w-md flex justify-center items-center shadow-[inset_20px_20px_20px_rgba(0,0,0,.05),_25px_35px_20px_rgba(0,0,0,.05),_25px_30px_30px_rgba(0,0,0,.05),_inset_-20px_-20px_25px_rgba(255,255,255,.9)] dark:shadow-[inset_20px_20px_20px_rgba(255,255,255,.05),_25px_35px_20px_rgba(255,255,255,.05),_25px_30px_30px_rgba(255,255,255,.05),_inset_-20px_-20px_25px_rgba(0,0,0,.9)] flex-col text-center p-5 min-h-[250px]"
          >
            <div className="w-20 aspect-square flex justify-center items-center border-4 rounded-full border-double border-(--linkC)">
              <Image
                src={drop.image}
                alt={drop.title}
                width={80}
                height={80}
                priority
                className="w-5/6 hover:scale-105 transition-all duration-700"
              />
            </div>
            <h3 className="mt-3 font-semibold">{drop.title}</h3>
            <p className="text-gray-600">{drop.description}</p>
          </div>
        ))}
      </div>
      <IfLoggedOut>
        <WorkBox className="mt-14 text-center">
          <h2>Upload & Share Your Images Instantly!</h2>
          <p>
            Sign up now to upload images up to 10MB and get a public shareable
            link.
          </p>
          <Button
            htmlFor="loginSignupCheckId"
            className="rounded-full py-3 px-[10%]"
          >
            Upload Now
          </Button>
        </WorkBox>
      </IfLoggedOut>
    </>
  );
}
