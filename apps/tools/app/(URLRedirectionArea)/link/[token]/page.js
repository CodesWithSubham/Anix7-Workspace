import { jwtDecrypt } from "jose";
import RedirectWithDelay from "./RedirectWithDelay";
import Error from "@shared/components/errors/Error";
import { notFound } from "next/navigation";

const secretKey = new TextEncoder().encode(process.env.URL_SHORTENER_TOKEN);

export default async function Page({ params }) {
  try {
    // Await params before using its properties, then extract the token
    const { token } = await params;

    // Decode the token from Base64URL back to the original JWE string
    const decodedToken = Buffer.from(token, "base64url").toString("utf8");

    // Decrypt the token using the secret key
    const { payload } = await jwtDecrypt(decodedToken, secretKey);

    // If payload contains a longUrl, redirect to it
    if (payload?.longUrl) {
      return (
        <RedirectWithDelay
          longUrl={payload.longUrl}
          adsLabel={payload.adsLabel}
        />
      );
    } else {
      return notFound();
    }
  } catch (error) {
    console.error("Error during decryption:", error);
    if (error.code === "ERR_JWE_DECRYPTION_FAILED") {
      return notFound();
    }
    return <Error />;
  }
}
