import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { CircleLoadingSvg } from "../svg/LoadingSvg";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export function Button({
  children,
  loading = false,
  loadingText = "Loading...",
  className = "",
  svg,
  loadingSvg = <CircleLoadingSvg className="text-white" />,
  as = "button", // 'button' by default
  ...props
}: ButtonProps) {
  const isAnchor = "href" in props;
  const isLabel = "htmlFor" in props;

  const Component = isAnchor ? Link : isLabel ? "label" : "button";

  return (
    <Component
      className={twMerge(
        `inline-flex justify-center items-center m-2 py-2.5 px-4 text-white font-bold outline-0 border-0 rounded-md overflow-hidden max-w-xs cursor-pointer transition-all duration-500 bg-(--linkC) select-none min-h-8`,
        loading || (props as any).disabled
          ? "cursor-not-allowed opacity-75"
          : "hover:shadow-[inset_3px_3px_10px_#00000045,inset_-3px_-3px_10px_#00000045] hover:scale-102 hover:*:scale-95",
        className
      )}
      {...{
        ...(props as any),
        ...(!isAnchor && !isLabel && { disabled: loading || (props as any).disabled }),
      }}
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
}

// IconButton Wrapper
export const IconButton = ({
  className,
  ...props
}: ButtonAsButton & {
  children?: React.ReactNode;
}) => {
  return (
    <Button
      className={twMerge(
        "inline-block shrink-0 bg-transparent rounded-full p-2 aspect-square hover:shadow-[inset_1px_1px_5px_#00000045,inset_-1px_-1px_5px_#00000045] text-inherit",
        className
      )}
      {...props}
    >
      {props.children}
    </Button>
  );
};

type CommonProps = {
  loading?: boolean;
  loadingText?: ReactNode;
  loadingSvg?: ReactNode;
  svg?: ReactNode;
  className?: string;
  rootClassName?: string;
  children?: ReactNode;
};

// Base variants
type ButtonAsButton = {
  as?: "button";
} & CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = {
  as: "a";
  href: string;
} & CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAsLabel = {
  as: "label";
  htmlFor: string;
} & CommonProps &
  LabelHTMLAttributes<HTMLLabelElement>;

// Full discriminated union
export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLabel;
