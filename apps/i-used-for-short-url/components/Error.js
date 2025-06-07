// app/global-error.js

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Error() {
  const router = useRouter();

  const [timer, setTimer] = useState(6);
  const TRY_INTERVAL = 5;

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);
  
  return (
    <article className="flex flex-col gap-2 justify-center items-center text-center">
      <h1>Something went wrong!</h1>
      <svg
        alt="Web browser with concerned expression"
        viewBox="0 0 151 140"
        className="w-60 h-60"
      >
        <title>Just a moment...</title>
        <g
          id="Well shoot..."
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g transform="translate(-31.000000, -40.000000)">
            <g transform="translate(31.000000, 40.000000)">
              <rect
                id="exclaim-1"
                fill="#584B86"
                x="22"
                y="0"
                width="2"
                height="14"
                rx="1"
              />
              <rect
                id="exclaim-2"
                fill="#584B86"
                transform="translate(7.000000, 23.000000) rotate(90.000000) translate(-7.000000, -23.000000) "
                x="6"
                y="16"
                width="2"
                height="14"
                rx="1"
              />
              <rect
                id="exclaim-3"
                fill="#584B86"
                transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) "
                x="11"
                y="5"
                width="2"
                height="14"
                rx="1"
              />
              <ellipse
                id="shadow"
                fill="#000000"
                opacity="0.08"
                cx="79"
                cy="129.5"
                rx="72"
                ry="10.5"
              />
              <rect
                id="body"
                fill="#FFFFFF"
                x="22"
                y="22"
                width="114"
                height="106"
                rx="9"
              />
              <polygon
                id="toolbar"
                fill="#CDCADD"
                points="23 47 79 47 135 47 135 32 135 29 132 25 128 23 29.9948981 23 26 25 24 27 23 30"
              />
              <circle
                id="toolbar-button-1"
                stroke="#584B86"
                strokeWidth="2"
                fill="#FFFFFF"
                cx="33.5"
                cy="34.5"
                r="2.5"
              />
              <circle
                id="toolbar-button-2"
                stroke="#584B86"
                strokeWidth="2"
                fill="#FFFFFF"
                cx="43.5"
                cy="34.5"
                r="2.5"
              />
              <circle
                id="toolbar-button-3"
                stroke="#584B86"
                strokeWidth="2"
                fill="#FFFFFF"
                cx="53.5"
                cy="34.5"
                r="2.5"
              />
              <rect
                id="toolbar-border-bottom"
                fill="#584B86"
                x="22"
                y="45"
                width="114"
                height="2"
              />
              <rect
                id="toolbar-shadow"
                fill="#000000"
                opacity="0.08"
                x="24"
                y="47"
                width="110"
                height="2"
              />
              <rect
                id="window-border"
                stroke="#584B86"
                strokeWidth="2"
                x="23"
                y="23"
                width="112"
                height="104"
                rx="9"
              />
              <g id="eyes">
                <ellipse
                  id="eye-left"
                  fill="#584B86"
                  cx="56.5"
                  cy="72.5"
                  rx="3.5"
                  ry="3.5"
                >
                  <animate
                    attributeName="ry"
                    repeatCount="indefinite"
                    fill="freeze"
                    values="3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;0.5;2"
                    from="3.5"
                    to="0.5"
                    dur="3s"
                    id="leftEyeAnim"
                    d="leftEyeAnim"
                  />
                </ellipse>
                <ellipse
                  id="eye-right"
                  fill="#584B86"
                  cx="101.5"
                  cy="72.5"
                  rx="3.5"
                  ry="3.5"
                >
                  <animate
                    attributeName="ry"
                    repeatCount="indefinite"
                    fill="remove"
                    values="3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;3.5;0.5;2"
                    from="3.5"
                    to="0.5"
                    dur="3s"
                  />
                </ellipse>
                <animateMotion
                  dur="6s"
                  fill="freeze"
                  calcMode="linear"
                  repeatCount="indefinite"
                  keyPoints="0; 0;   0;   0;    0;    0;    0.25; 0.25; 0.25; 0.75; 0.75; 0.75;  0.75; 1; 1"
                  keyTimes=" 0; 0.1; 0.2; 0.3;  0.4;  0.5;  0.6;  0.65; 0.7;  0.75; 0.8;  0.825; 0.85; 0.9; 1"
                  path="
                      M 0 0
                      C 5 2, 5 2, 12 0
                      C 0 3, 0 3, -10 0
                      H 0
                      "
                />
                <rect
                  id="mouth"
                  fill="#584B86"
                  x="65"
                  y="94"
                  width="28"
                  height="2"
                  rx="1"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <button
        className="bg-blue-500 text-white px-5 py-3 mt-5 rounded-full hover:bg-blue-600 disabled:opacity-50"
        onClick={() => {
          setTimer(TRY_INTERVAL);
          router.refresh();
        }}
        disabled={timer > 0}
      >
        Try again {timer > 0 && `in ${timer}s`}
      </button>
      <p>
        Our engineers are currently fixing something.
        <br />
        We expect them to be done soon.
      </p>
    </article>
  );
}
