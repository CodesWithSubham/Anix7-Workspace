// app/global-error.js

// Error boundaries must be Client Components
"use client";
import GlobalErrorLayout from "@shared/components/errors/GlobalErrorLayout";

export default function GlobalError({ error, reset }) {
  return <GlobalErrorLayout error={error} reset={reset} />;
}
