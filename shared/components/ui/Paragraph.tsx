import { twMerge } from "tailwind-merge";

export function Paragraph({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={twMerge("my-1 text-justify", className)} {...props}>
      {children}
    </p>
  );
}

export function ErrorText({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={twMerge("text-red-500 font-semibold text-xs text-left -mt-1 ml-2 mb-2", className)}
      {...props}
    >
      {children}
    </p>
  );
}
