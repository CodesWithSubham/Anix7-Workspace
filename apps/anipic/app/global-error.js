// app/global-error.js

// Error boundaries must be Client Components
"use client";
import GlobalErrorLayout from "@shared/components/errors/GlobalErrorLayout";

export default function GlobalError({ error, reset }) {
  // Infer error code based on the error message
  return <GlobalErrorLayout error={error} reset={reset} />;
}
