import { redirect } from "next/navigation";

export default function Home() {
  redirect(new URL(process.env.ROOT_URL).toString());
}
