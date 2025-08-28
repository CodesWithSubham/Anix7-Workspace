import { twMerge } from "tailwind-merge";

type TSection = {
  title?: string;
  titleClassName?: string;
} & React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>;

export default function Section({
  children,
  title,
  titleClassName,
  className,
  ...props
}: TSection) {
  return (
    <section
      {...props}
      className={twMerge(
        "relative bg-white px-5 py-8 mt-5 mb-12 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl text-justify ",
        title && "pt-20",
        className
      )}
    >
      {title && (
        <h2
          className={twMerge(
            "absolute top-5 w-[calc(100%-40px)] left-1/2 -translate-x-1/2 text-center after:content-[''] after:block after:w-40 after:h-[3px] after:bg-(--linkC) after:rounded-full after:mx-auto after:mt-1 line-clamp-1",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
