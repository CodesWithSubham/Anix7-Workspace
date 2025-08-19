// components/LoggedInWrapper.js
"use client";

import { useSession } from "next-auth/react";

export function IfLoggedIn({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // optional: show nothing during loading
  if (!session) return null;

  return <>{children}</>;
}

export function IfLoggedOut({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (session) return null;

  return <>{children}</>;
}
