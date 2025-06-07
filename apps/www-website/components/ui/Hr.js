import { twMerge } from "tailwind-merge";

export default function Hr({ className = "", ...props }) {
  return (
    <div
      className={twMerge(
        "h-px w-11/12 bg-gray-200 dark:bg-gray-600 mx-auto my-5 rounded-full",
        className
      )}
      {...props}
    />
  );
}