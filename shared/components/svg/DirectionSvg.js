export function CircleUpSvg({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g stroke="none">
        <path d="M11.65 10.15a.5.5 0 0 1 .7 0l3 3a.5.5 0 0 1-.7.7L12 11.21l-2.65 2.64a.5.5 0 0 1-.7-.7Z" />
        <path d="M2.07 12A9.93 9.93 0 1 1 12 21.93 9.94 9.94 0 0 1 2.07 12Zm18.86 0A8.93 8.93 0 1 0 12 20.93 8.94 8.94 0 0 0 20.93 12Z" />
      </g>
    </svg>
  );
}
