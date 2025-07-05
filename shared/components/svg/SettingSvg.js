import { twMerge } from "tailwind-merge";

export function SettingSvg({ className = "", ...props }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("line", className)}
      {...props}
    >
      <circle className="svgC" cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8h0a2 2 0 0 1 0 3 2 2 0 0 1-2.7 0l-.1-.1a1.6 1.6 0 0 0-1.8-.4 1.6 1.6 0 0 0-1 1.5v.2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v0A1.6 1.6 0 0 0 9 19.3a1.6 1.6 0 0 0-1.8.3h0a2 2 0 0 1-3 0 2 2 0 0 1 0-2.7l.1-.1a1.6 1.6 0 0 0 .4-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h0a1.6 1.6 0 0 0 1.7-1 1.6 1.6 0 0 0-.3-1.8h0a2 2 0 0 1 0-3 2 2 0 0 1 2.7 0l.1.1a1.6 1.6 0 0 0 1.8.4h0a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v0a1.6 1.6 0 0 0 1 1.6 1.6 1.6 0 0 0 1.8-.3h0a2 2 0 0 1 3 0 2 2 0 0 1 0 2.7l-.1.1a1.6 1.6 0 0 0-.4 1.8V9a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h0a1.6 1.6 0 0 0-1.6 1z" />
    </svg>
  );
}
