"use client";
import { toast } from "react-toastify";

export default function copyToClipboard(text) {
  if (typeof navigator?.clipboard?.writeText !== "function") {
    toast.error("Copy not supported in your Browser.");
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => toast("Copied to clipboard!"))
    .catch((err) => {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy!");
    });
}
