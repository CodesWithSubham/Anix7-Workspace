// /app/admin/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UploadPage() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  return (
    <div className="mx-auto w-[90vw] text-center">
      <h1 className="text-xl underline mb-4">Dashboard</h1>
      <button className="bg-blue-900 p-3 rounded-xl w-full mb-3" type="submit" onClick={() => router.push("/admin/view-all")}>View All Tasks</button>
      <button className="bg-blue-900 p-3 rounded-xl w-full mb-3" type="submit" onClick={() => router.push("/admin/upload")}>Upload Task</button>
      <button className="bg-blue-900 p-3 rounded-xl w-full mb-3" type="submit" onClick={() => router.push("/admin/upload")}>Upload Task</button>

    </div>
  );
}