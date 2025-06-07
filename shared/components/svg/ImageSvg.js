import { twMerge } from "tailwind-merge";

export function ImageSvg({ className = "", ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className={twMerge("", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="416"
        height="352"
        x="48"
        y="80"
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
        ry="48"
      ></rect>
      <circle
        cx="336"
        cy="176"
        r="32"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="32"
      ></circle>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80 123.34-123.34a32 32 0 0 1 43.11-2L464 368"
      ></path>
    </svg>
  );
}

export function ImageRoundedSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={twMerge("line", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(2.000000, 2.000000)">
        <path
          className="svgC"
          d="M4.0706,14.459 C4.0706,14.459 4.8826,12.822 6.0646,12.822 C7.2466,12.822 7.8506,14.197 9.1606,14.197 C10.4696,14.197 11.9386,10.749 13.4226,10.749 C14.9046,10.749 15.9706,13.14 15.9706,13.14"
        ></path>
        <path
          className="svgC"
          d="M8.1393,7.1049 C8.1393,7.9649 7.4423,8.6629 6.5813,8.6629 C5.7213,8.6629 5.0243,7.9649 5.0243,7.1049 C5.0243,6.2449 5.7213,5.5469 6.5813,5.5469 C7.4423,5.5479 8.1393,6.2449 8.1393,7.1049 Z"
        ></path>
        <path d="M0.7503,10.0001 C0.7503,16.9371 3.0633,19.2501 10.0003,19.2501 C16.9373,19.2501 19.2503,16.9371 19.2503,10.0001 C19.2503,3.0631 16.9373,0.7501 10.0003,0.7501 C3.0633,0.7501 0.7503,3.0631 0.7503,10.0001 Z"></path>
      </g>
    </svg>
  );
}
