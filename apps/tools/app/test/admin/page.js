"use client";

import { useSession } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </>
  );
}
