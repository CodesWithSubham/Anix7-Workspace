// /app/admin/login/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UploadPage() {
  const [password, setPassword] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  // Ensure the router is only used on the client-side
  useEffect(() => {
    setIsMounted(true); // Set to true when the component mounts
  }, []);
  
  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();



    try {

      const response = await fetch('/api/adminLogin', {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.message === "Verified successfully") {
        router.replace("/admin")
      } else {
        toast.error(result.error || "Verification failed.");
      }
    } catch (error) {
      console.error("Verification Error:", error);
      toast.warning("An unexpected error occurred. Please try again.");
    }

    
  };


  
  // Wait until the component is mounted before rendering anything
  if (!isMounted) return null;

  return (
    <div className="m-x-auto w-[90vw] align-center">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          className="text-black p-3"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
        />
        <button className="bg-blue-900 p-3" type="submit">Login</button>
      </form>

    </div>
  );
}