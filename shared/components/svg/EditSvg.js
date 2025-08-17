export function EditSvg({ className = "", ...props }) {
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
        d="M19 7.4a2 2 0 0 0 0-2.8L17.5 3a2 2 0 0 0-2.9 0L4 13.6V18h4.4L19 7.4zm-3-3L17.6 6 16 7.6 14.5 6 16 4.4zM6 16v-1.6l7-7L14.6 9l-7 7H6zm-2 4h16v2H4z"
      />
    </svg>
  );
}
