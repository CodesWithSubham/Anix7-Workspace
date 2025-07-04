export function ArrowUpSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="m256 218 127 127c9 9 25 9 34 0s9-25 0-34L273 167c-9-9-24-9-33-1L95 311a24 24 0 0 0 34 34l127-127z"
      />
    </svg>
  );
}
export function ArrowDownSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="m256 294 127-127c9-9 25-9 34 0s9 25 0 34L273 345c-9 9-24 9-33 1L95 201a24 24 0 0 1 34-34l127 127z"
      />
    </svg>
  );
}
export function ArrowLeftSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="m218 256 127-127c9-9 9-25 0-34s-25-9-34 0L167 239c-9 9-9 24-1 33l145 145a24 24 0 0 0 34-34L218 256z"
      />
    </svg>
  );
}
export function ArrowRightSvg({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="none"
        d="M294 256 167 129c-9-9-9-25 0-34s25-9 34 0l144 144c9 9 9 24 1 33L201 417a24 24 0 0 1-34-34l127-127z"
      />
    </svg>
  );
}
