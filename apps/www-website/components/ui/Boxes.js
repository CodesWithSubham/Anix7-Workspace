"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function WorkBox({ children, className = "", ...props }) {
  return (
    <div
      className={twMerge(
        "my-3 mx-auto p-5 bg-transparent text-center shadow-[0_5px_35px_rgba(0,0,0,0.1)] rounded-xl relative",
        className
      )}
      {...props}
    >
      <div className="w-16 h-16 absolute -z-10 bg-black/5 bottom-0 left-0 rounded-tr-full" />
      {children}
    </div>
  );
}

export function PopUpBox({
  children,
  id = "",
  visible = true,
  className = "",
  closeable = false,
  header = "",
  svg = "",
  onClose = () => {},
  ...props
}) {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    setIsAtBottom(scrollHeight - scrollTop - clientHeight <= 10);
  }, []);

  const checkScrollable = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollHeight, clientHeight } = el;
    setIsScrollable(scrollHeight > clientHeight);
    handleScroll();
  }, [handleScroll]);

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    checkScrollable();
  }, [children, checkScrollable]);

  const [isVisible, setIsVisible] = useState(visible);
  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [isVisible, onClose]);
  return (
    <>
      <input
        type="checkbox"
        id={id || undefined}
        className="hidden"
        checked={isVisible}
        onChange={(e) => setIsVisible(e.target.checked)}
      />

      <div
        className={`fixed -top-1/2 -bottom-1/2 -left-1/2 -right-1/2 z-98 bg-black/40 transition-all duration-700 ${
          isVisible ? "visible opacity-100" : " invisible opacity-0"
        }`}
      >
        <div className="fixed top-0 bottom-0 left-0 right-0 z-99 p-5 flex flex-col justify-center items-center backdrop-blur-xs">
          <div className="relative bg-slate-50 dark:bg-neutral-900 w-full max-w-xl pt-4 px-5 pb-6 rounded-3xl">
            {closeable && (
              <div
                className="absolute text-2xl text-white bg-(--linkC) -top-4 right-4 rounded-full w-7 h-7 flex justify-center items-center transition-all duration-300 cursor-pointer hover:scale-105 select-none"
                onClick={() => setIsVisible(false)}
              >
                &times;
              </div>
            )}

            <div className="mx-auto mb-1 w-6">{svg || <DefaultSVG />}</div>

            <div className="text-lg md:text-xl font-bold mb-2 text-center">
              {header}
            </div>

            <div
              className="max-h-[50vh] overflow-x-hidden overflow-y-auto"
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {children}
            </div>

            {isScrollable && !isAtBottom && (
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                onClick={scrollToBottom}
              >
                <button className="animate-bounce">
                  <DoubleDownIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Optional: Move SVGs out
function DefaultSVG() {
  return (
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 221v195a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h99a32 32 0 0 1 22 9l142 142a32 32 0 0 1 9 22z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"
      />
    </svg>
  );
}

function DoubleDownIcon() {
  return (
    <svg viewBox="0 0 15 15">
      <path
        d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
        className="svgC"
      ></path>
    </svg>
  );
}

export function Note({ children, className = "", type, ...props }) {
  return (
    <div className="my-2 relative pt-5 pl-12 pr-5 bg-(--headerB) dark:bg-neutral-800 rounded-xl overflow-hidden">
      <div className="absolute w-14 h-14 bg-black/5 rounded-full -top-3 -left-3" />
      <div className=" absolute left-4 top-4">&#9733;</div>
      {children}
    </div>
  );
}