import Script from "next/script";

export default function ThemeHead() {
  return (
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
  );
}
