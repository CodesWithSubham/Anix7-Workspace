// components/LoggedInWrapper.js
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function IfLoggedIn({ children }: React.PropsWithChildren<{}>) {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // optional: show nothing during loading
  if (!session) return null;

  return <>{children}</>;
}

export function IfLoggedOut({ children }: React.PropsWithChildren<{}>) {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (session) return null;

  return <>{children}</>;
}

export function RedirectIfLoggedOut({
  children,
  url = "/",
}: React.PropsWithChildren<{ url?: string }>) {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // optional: show nothing during loading
  const router = useRouter();
  if (!session) {
    router.push(url);
    return null;
  }

  return <>{children}</>;
}
