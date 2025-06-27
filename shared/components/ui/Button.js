import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { CircleLoadingSvg } from "../svg/LoadingSvg";

export const Button = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  className = "",
  href,
  htmlFor,
  svg,
  loadingSvg = <CircleLoadingSvg className="text-white" />,
  as = "button", // 'button' by default
  ...props
}) => {
  const Component = href ? Link : htmlFor ? "label" : as;
  return (
    <Component
      className={twMerge(
        `inline-flex justify-center items-center m-2 py-2 px-4 text-white font-bold outline-0 border-0 rounded-md overflow-hidden max-w-xs cursor-pointer transition-all duration-500 bg-(--linkC) min-h-8`,
        loading || disabled
          ? "cursor-not-allowed opacity-75"
          : "hover:shadow-[inset_3px_3px_10px_#00000045,inset_-3px_-3px_10px_#00000045] hover:scale-105 hover:*:scale-95",
        className
      )}
      disabled={disabled || loading}
      {...props}
      {...{ href }}
      {...{ htmlFor }}
    >
      <span
        className={twMerge(
          "inline-flex justify-center items-center gap-2 whitespace-nowrap transition-all duration-500",
          loading && "[&_svg]:w-4 [&_svg]:h-4"
        )}
      >
        {loading ? (
          <>
            {loadingSvg}
            {loadingText}
          </>
        ) : (
          <>
            {svg}
            {children}
          </>
        )}
      </span>
    </Component>
  );
};

export const IconButton = ({ className = "", children, svg, ...props }) => {
  return (
    <Button
      className={twMerge(
        "inline-block shrink-0 bg-transparent rounded-full p-2 aspect-square hover:shadow-[inset_1px_1px_5px_#00000045,inset_-1px_-1px_5px_#00000045] text-inherit",
        className
      )}
      svg={svg ?? children}
      {...props}
    />
  );
};
