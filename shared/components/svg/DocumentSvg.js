import { twMerge } from "tailwind-merge";

export function DocumentSvg({ className = "", ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"
      ></path>
    </svg>
  );
}
export function DocumentSecureSvg({ className = "", ...props }) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 32 32"
      className={twMerge("line", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.2 2.9v11.4h-.3l-4.5.7v7c0 2.8 1.6 6.4 4 8.1l.2.2c-.3.4-.8.6-1.4.6H2.9A2 2 0 0 1 1 29V3c0-1.1.8-2 1.9-2h17.4c1 0 1.9.9 1.9 1.9zM3.8 5.1h6m-6 4.3h10.7M3.8 13.7h10.7m.1 4.3H3.8m10.8 4.3H3.8m-.2 4.3h11" />
      <path
        className="svgC"
        d="M31 15v7c0 3.8-3.1 9-6.8 9a5 5 0 0 1-2.8-1c-2.4-1.7-4-5.2-4-8.1V15l4.4-.7L24 14l7 1z"
      />
      <path d="m21.3 23.3 1.4 1.4 4.4-4.4" />
    </svg>
  );
}
