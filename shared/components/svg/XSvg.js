export function XSvg({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 352 512"
      className={className}
      {...props}
    >
      <path
        stroke="none"
        d="m242.7 256 100-100a31.5 31.5 0 0 0 0-44.5l-22.2-22.3a31.5 31.5 0 0 0-44.4 0L176 189.2 76 89.3a31.5 31.5 0 0 0-44.5 0L9.2 111.5a31.5 31.5 0 0 0 0 44.4l100 100.1-100 100a31.5 31.5 0 0 0 0 44.5l22.3 22.3a31.5 31.5 0 0 0 44.4 0l100.1-100 100 100a31.5 31.5 0 0 0 44.5 0l22.3-22.2a31.5 31.5 0 0 0 0-44.5L242.8 256z"
      />
    </svg>
  );
}
