export function HomeSvg({ className = "", ...props }) {
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
      <path
        stroke="none"
        className="svgC"
        d="m12.22 11.64-.22.22-.22-.22a2.22 2.22 0 0 0-3.13 0 2.13 2.13 0 0 0 0 3.07L12 18l3.35-3.29a2.13 2.13 0 0 0 0-3.07 2.23 2.23 0 0 0-3.13 0z"
      />
      <path
        stroke="none"
        d="m21.7 11.3-9-9a1 1 0 0 0-1.4 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 .7-1.7zM18 20H6v-9.59l6-6 6 6V20z"
      />
    </svg>
  );
}
