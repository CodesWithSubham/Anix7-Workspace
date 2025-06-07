"use server";

import { cookies } from "next/headers";
import { signIn, signOut } from "./auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  const referralId = formData.get("referCode");

  if (referralId) {
    const c = await cookies();
    c.set("referral_id", referralId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 24 * 60 * 60, // 1 day
    });
  }

  await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin({ email, password }) {
  // console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (error) {
    switch (error.type) {
      case "CredentialsSignin":
        return { error: "Invalid credentials" };
      default:
        return { error: "Something went wrong!" };
    }
  }
}
