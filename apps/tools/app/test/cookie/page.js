"use client";

import { useEffect, useState } from "react";

export default function Cookie() {
  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    if (document?.cookie) setCookie(document?.cookie);
  }, []);

  return (
    <div>
      <pre className="w-full">{JSON.stringify(cookie, null, 2)}</pre>
    </div>
  );
}
