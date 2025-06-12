import { auth } from "@shared/lib/auth";
import { redirect } from "next/navigation";
import MyImages from "./myImages";

export default async function MyImg() {
  const session = await auth();

  if (!session) redirect("/?openLogin=1&next=/image-uploading/my-uploads");

  return <MyImages />;
}
