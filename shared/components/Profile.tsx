// components/Profile,js
"use client";

import Link from "next/link";
import Image from "next/image";
// import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconButton } from "./ui/Button";
import { useSession } from "next-auth/react";
import ThemePicker from "./theme/ThemePicker";
import { twMerge } from "tailwind-merge";
import { SettingSvg } from "./svg/SettingSvg";
import { ColorPaletteSvg } from "./svg/ColorPaletteSvg";
import ProfileSvg from "./svg/ProfileSvg";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;

  const [profilePop, setProfilePop] = useState(false);
  const [themePop, setThemePop] = useState(false);

  const pathname = usePathname(); // Detects route changes

  // Close profilePop when route changes
  useEffect(() => {
    setProfilePop(false);
    setThemePop(false);
  }, [pathname]); // Runs whenever the route changes

  return (
    <>
      {user && (
        <>
          <IconButton
            onClick={() => setProfilePop(!profilePop)}
            aria-label="Profile"
            svg={<ProfileSvg />}
          />
          {profilePop && (
            <div
              className="fixed top-16 right-2 bg-(--headerB) z-20 shadow-2xl p-4 rounded-md w-56 sm:w-xs max-w-screen"
              style={{ position: "fixed" }}
            >
              <ul className="flex flex-col gap-2 *:flex  *:items-center *:gap-2">
                <li>
                  <Image
                    src={user?.profilePic ?? "https://i.ibb.co/1JGDTytY/default-Profile-Pic.webp"}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt={user?.firstName ?? "Profile Pic"}
                    unoptimized
                  />
                  <div className="flex flex-col">
                    <span className="font-bold">
                      {user?.firstName}
                      {user?.role && user.role !== "user"
                        ? ` (${user.role.charAt(0).toUpperCase() + user.role.slice(1)})`
                        : ""}
                    </span>
                    <span className="text-xs text-gray-500">{user?.email}</span>
                  </div>
                </li>
                <li className="border-b"></li>

                <li>
                  <Link href="/setting" className="text-inherit hover:text-(--linkC) flex gap-2">
                    <SettingSvg /> Setting
                  </Link>
                </li>
                <li
                  onClick={() => setThemePop(!themePop)}
                  className="hover:text-(--linkC) cursor-pointer"
                >
                  <ColorPaletteSvg /> Change Theme
                </li>

                <li
                  className={twMerge(
                    "flex-col space-y-2 text-center max-h-0 overflow-hidden transition-all",
                    themePop && "max-h-screen"
                  )}
                >
                  <ThemePicker />
                </li>
              </ul>
              <label
                className="fixed -z-10 top-0 left-0 right-0 bottom-0"
                onClick={() => {
                  setProfilePop(!profilePop);
                  setThemePop(false);
                }}
              ></label>
            </div>
          )}
        </>
      )}
    </>
  );
}
