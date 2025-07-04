export function ResizeSvg({ className = "", ...props }) {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 256 256"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="M136 112H48a8 8 0 0 0-8 8v88a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-88a8 8 0 0 0-8-8Zm-8 88H56v-72h72Zm88-16v16a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h24v-16a8 8 0 0 1 16 0Zm0-72v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0Zm0-56v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16a16 16 0 0 1 16 16Zm-64-8a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8ZM40 80V56a16 16 0 0 1 16-16h16a8 8 0 0 1 0 16H56v24a8 8 0 0 1-16 0Z"
      />
    </svg>
  );
}
