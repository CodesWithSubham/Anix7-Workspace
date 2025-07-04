export function DownloadCloudSvg({ className = "", ...props }) {
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
        stroke="none"
        d="M403 217a150 150 0 0 0-280-40c-60 6-107 57-107 119 0 66 54 120 120 120h260c55 0 100-45 100-100 0-53-41-96-93-99zm-179 51v-76h64v76h68L256 368 156 268h68z"
      />
    </svg>
  );
}
