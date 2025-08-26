import { redirect } from "next/navigation";

const ROOT_URL = process.env.ROOT_URL;

export default function Home() {
  if (!ROOT_URL) {
    throw new Error("Please add Root Url in env!");
  }
  redirect(new URL(ROOT_URL).toString());
}
