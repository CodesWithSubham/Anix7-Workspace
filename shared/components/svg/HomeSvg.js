import { twMerge } from "tailwind-merge";

export function HomeSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 258.96 221.44"
      className={twMerge("line", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(-42 1092.966 558.342)"
          gradientUnits="userSpaceOnUse"
          id="linear-gradient"
          x1="551.88"
          x2="775.31"
          y1="-407.55"
          y2="-407.55"
        >
          <stop offset="0" stopColor="#efa6c2" />
          <stop offset="1" stopColor="#96cdbd" />
        </linearGradient>
        <style>
          {`
.cls-5 { stroke: #212683; }
.cls-5, .cls-6 { stroke-miterlimit: 10; stroke-width: 6px; }
.cls-5 { fill: none; }
.cls-6 { fill: var(--linkC); stroke: #1f2687; }
.cls-7 { fill: #212683; }
`}
        </style>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g data-name="Layer 2" id="Layer_2">
          <g data-name="Layer 1" id="Layer_1-2">
            <path
              d="M171.63 67.57a53.78 53.78 0 1 0-105.52-8.69 68.07 68.07 0 1 0 62 100.32 68.09 68.09 0 1 0 43.57-91.63z"
              style={{
                opacity: 0.4,
                mixBlendMode: "multiply",
                fill: "url(#linear-gradient)",
              }}
            />
            <path
              className="svgC"
              d="M205.76 82.86v103.2H76.73V82.86l44.61-44.6h39.82l44.6 44.6z"
            />
            <path
              d="m223.31 108.54-7.89 7.89a5.74 5.74 0 0 1-8.13 0l-1.53-1.52-60.45-60.45a5.74 5.74 0 0 0-8.13 0L103 88.61l-26.31 26.3-1.52 1.52a5.74 5.74 0 0 1-8.13 0l-7.9-7.89a5.76 5.76 0 0 1 0-8.13l17.59-17.55 44.61-44.61 3.88-3.88-.1-.11 16-16 .11.11.1-.11 16 16-.1.11 3.88 3.88 44.6 44.61 17.55 17.55a5.74 5.74 0 0 1 .05 8.13z"
              style={{
                strokeMiterlimit: 10,
                strokeWidth: 6,
                stroke: "#212683",
                fill: "#cec09f",
              }}
            />
            <path
              className="cls-5"
              d="M76.73 114.9v63.77a7.38 7.38 0 0 0 7.38 7.38h114.27a7.38 7.38 0 0 0 7.38-7.38v-28.81M205.76 129.52v-14.61"
            />
            <path
              className="cls-6"
              d="M141.25 140.3a16.36 16.36 0 0 1 16.36 16.36v29.4h-32.73v-29.4a16.36 16.36 0 0 1 16.37-16.36z"
            />
            <path
              className="cls-5"
              d="M76.73 160.97h48.15M157.61 160.73h48.15"
            />
            <circle className="cls-7" cx="205.76" cy="140.13" r="2.69" />
            <path
              className="cls-7"
              d="M62.11 27.64h-2.76v-2.75a3.4 3.4 0 0 0-6.79 0v2.76H49.8a3.4 3.4 0 0 0 0 6.79h2.76v2.76a3.4 3.4 0 0 0 6.79 0v-2.76h2.76a3.4 3.4 0 0 0 0-6.79zM231.15 34.86h-2.76V32.1a3.4 3.4 0 0 0-6.79 0v2.76h-2.76a3.4 3.4 0 0 0 0 6.79h2.76v2.76a3.4 3.4 0 0 0 6.79 0v-2.76h2.76a3.4 3.4 0 0 0 0-6.79zM47.44 208.49h-2.76v-2.76a3.4 3.4 0 0 0-6.79 0v2.76h-2.76a3.4 3.4 0 0 0 0 6.79h2.76V218a3.4 3.4 0 0 0 6.79 0v-2.76h2.76a3.4 3.4 0 0 0 0-6.79z"
            />
            <rect
              className="cls-6"
              height="17.35"
              rx="5.04"
              ry="5.04"
              width="10.08"
              x="119.67"
              y="87.25"
            />
            <rect
              className="cls-6"
              height="17.35"
              rx="5.04"
              ry="5.04"
              width="10.08"
              x="152.73"
              y="87.25"
            />
            <rect
              className="cls-6"
              height="17.35"
              rx="5.04"
              ry="5.04"
              width="10.08"
              x="136.2"
              y="77.42"
            />
            <path
              className="cls-6"
              d="m155.55 121.06-5.62-9.74a10 10 0 0 0-17.37 0l-5.62 9.74-.1.18c-3.09 5.6 3.06 11.6 8.77 8.72a12.58 12.58 0 0 1 11.29 0c5.71 2.88 11.86-3.12 8.77-8.72z"
            />
            <path className="cls-5" d="M103.04 88.61v40.91M103.04 134.7v8.12" />
          </g>
        </g>
      </g>
    </svg>
  );
}
