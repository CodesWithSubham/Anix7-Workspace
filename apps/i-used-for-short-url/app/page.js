import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://anix7.in");
  return (
    <>
      <div>
        <h1>Anix7</h1>
      </div>
    </>
  );
}
