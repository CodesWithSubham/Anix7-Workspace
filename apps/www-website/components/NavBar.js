"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Hr from "./ui/Hr";

const navUrl = [
  { name: "Home", href: "/" },
  { name: "Anix7 Tools", href: "https://tools.anix7.in" },
  { name: "Anix7 Anime", href: "https://anime.anix7.in" },
  { name: "AniPic", href: "https://anipic.anix7.in" },
  // { name: "Photos", href: "https://photo.anix7.in" },
  // { name: "About", href: "/about" },
];

export default function NavBar() {
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current.checked) navRef.current.checked = false;
  }, [pathname]);

  return (
    <>
      <input
        ref={navRef}
        type="checkbox"
        className="peer/navMenu hidden"
        id="navMenu"
      />
      <header className=" sticky z-50 top-0 left-0 right-0 bg-neutral-50 dark:bg-neutral-950 flex justify-between items-center shadow dark:shadow-gray-900 h-16">
        <div className="flex w-full items-center gap-2 pl-3">
          <Image
            src="/favicon.ico"
            alt="Next.js Logo"
            width={50}
            height={50}
            className="w-10 h-10 rounded-full"
          />
          <span>Anix7</span>
        </div>
        <nav className="w-full flex justify-end items-center p-4">
          <label
            htmlFor="navMenu"
            className="md:hidden cursor-pointer hover:bg-cyan-500 transition-all duration-500 rounded-full p-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
            </svg>
          </label>
          <ul className="hidden md:flex gap-5">
            {navUrl
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </header>
      <div className="fixed invisible md:hidden peer-checked/navMenu:visible top-0 right-0 left-0 bottom-0 z-50 mr-[-100%] peer-checked/navMenu:mr-0 transition-all duration-300">
        <div className="bg-neutral-50 dark:bg-neutral-900 w-full max-w-xs absolute top-5 right-4 bottom-4 z-10 rounded-2xl pt-16 pb-10 flex overflow-hidden shadow border border-neutral-200 dark:border-neutral-800">
          <label
            htmlFor="navMenu"
            className="absolute text-sm top-5 right-5 hover:bg-black/30 dark:hover:bg-gray-800 px-2 py-1 rounded-full cursor-pointer transition-all duration-300"
          >
            Close &#10005;
          </label>
          {/* <Hr/> */}
          <div className="h-full w-full overflow-x-hidden overflow-y-scroll mb-5 p-5 border-t border-neutral-200 dark:border-neutral-800">
            <ul className="block space-y-5">
              {navUrl
                .filter((item) => item.href !== pathname)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <label
          htmlFor="navMenu"
          className="backdrop-blur-xs absolute top-0 left-0 right-0 bottom-0 z-0"
        ></label>
      </div>
    </>
  );
}
