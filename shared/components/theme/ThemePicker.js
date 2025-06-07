"use client";

import { set } from "mongoose";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const colors = [
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

export default function ThemePicker({ className = "" }) {

  const [showSystemButton, setShowSystemButton] = useState(false);
  useEffect(() => {
    if (window?.matchMedia) {
      setShowSystemButton(true);
    }
  }, []);

  // useEffect(() => {
  //   if (window?.matchMedia) {
  //     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //     const handleChange = (e) => {
  //       setIsDark(e.matches);
  //     };
  //     mediaQuery.addEventListener("change", handleChange);
  //     return () => {
  //       mediaQuery.removeEventListener("change", handleChange);
  //     };
  //   }
  // }, [showSystem]);

  const setMetaThemeColor = (mode) => {
    const themeColor =
      mode === "dark"
        ? "#1d1d1d"
        : getComputedStyle(document.body).getPropertyValue("--linkC")?.trim() ||
          "#fffdfc";

    let themeMeta = document.querySelector("meta[name='theme-color']");
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.name = "theme-color";
      document.head.appendChild(themeMeta);
    }
    themeMeta.setAttribute("content", themeColor);
  };

  const setMode = (m) => {
    let mode = m;
    let isSystem = mode === "system";
    localStorage.setItem("themeMode", mode);

    // If no preference saved, use system preference
    if (isSystem) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      mode = systemPrefersDark ? "dark" : "light";
    }

    document.body.classList.toggle("dark", mode === "dark");
    document.body.classList.toggle("system", isSystem);
    setMetaThemeColor(mode);
  };

  const setThemeColor = (index) => {
    const colorClass = `theme${index}`;
    // Remove old theme color classes
    document.body.classList.remove(
      ...(document.body.className.match(/theme\d+/g) || [])
    );
    document.body.classList.add(colorClass); // Apply the new theme to body

    localStorage.setItem("themeColor", colorClass);

    setMetaThemeColor("light");
  };

  return (
    <div className={twMerge("flex flex-col gap-3", className)}>
      <div className="flex justify-center gap-2 flex-wrap *:p-2 *:border-2 *:rounded-md *:cursor-pointer">
        <button
          onClick={() => setMode("light")}
          className="not-dark:not-[.system_*]:border-(--linkC) hover:border-dotted hover:border-(--linkC)"
        >
          Light
        </button>
        <button
          onClick={() => setMode("dark")}
          className="dark:not-[.system_*]:border-(--linkC) hover:border-dotted hover:border-(--linkC)"
        >
          Dark
        </button>
        {showSystemButton && (
          <button
            onClick={() => setMode("system")}
            className="in-[.system]:border-(--linkC) hover:border-dotted hover:border-(--linkC)"
          >
            System
          </button>
        )}
      </div>

      <div className="max-h-screen dark:max-h-0 overflow-hidden transition-all duration-500 w-full flex flex-wrap justify-center">
        {colors.map((color, index) => (
          <span
            key={index}
            className={`inline-block w-4 h-4 m-2 rounded-full ring-3 ring-transparent ring-offset-3 ring-offset-transparent cursor-pointer themePickerOutline${index} hover:scale-110 transition-all duration-300`}
            style={{ backgroundColor: color }}
            onClick={() => setThemeColor(index)} // Set theme color on click
          />
        ))}
      </div>
    </div>
  );
}
