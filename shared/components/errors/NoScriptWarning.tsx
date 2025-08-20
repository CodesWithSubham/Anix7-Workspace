import { PopUpBox } from "../ui/Boxes";
import { Button } from "../ui/Button";

export default function NoScriptWarning() {
  return (
    <noscript>
      <PopUpBox
        header="JavaScript is Disabled"
        svg={
          <svg strokeWidth="0" viewBox="0 0 24 24">
            <path fill="none" stroke="none" d="M0 0h24v24H0V0z" />
            <path
              stroke="none"
              d="M1.4 1.7 0 3l1 1v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h.9l6 6 1.4-1.4-20.9-21zM3 16V6l9.9 10h-10zM4.5 2l2 2H21v12h-2.5l2 2h.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4.6z"
            />
          </svg>
        }
      >
        <div className="text-center">
          <p className="mt-4">
            Please enable JavaScript to use this application.
          </p>
          <Button
            href="/"
            svg={
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 17 17"
              >
                <path
                  stroke="none"
                  d="M6 8H0V2h1v4.109C2.013 2.916 5.036.625 8.5.625c3.506 0 6.621 2.36 7.574 5.739l-.963.271A6.898 6.898 0 0 0 8.5 1.624C5.274 1.625 2.484 3.9 1.792 7H6v1zm5 1v1h4.208c-.693 3.101-3.479 5.375-6.708 5.375a6.895 6.895 0 0 1-6.611-5.011l-.963.271A7.9 7.9 0 0 0 8.5 16.374c3.459 0 6.475-2.28 7.5-5.482V15h1V9h-6z"
                />
              </svg>
            }
          >
            Reload
          </Button>
        </div>
      </PopUpBox>
    </noscript>
  );
}
