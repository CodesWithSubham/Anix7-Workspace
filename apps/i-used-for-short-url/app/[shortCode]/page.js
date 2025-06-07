import clientPromise from "@/lib/mongodb";
import { notFound, redirect } from "next/navigation";
import { EncryptJWT } from "jose";

const secretKey = new TextEncoder().encode(process.env.URL_SHORTENER_TOKEN);

// Function to encrypt data and generate a URL-safe token
async function encryptAndRedirect(data) {
  const encrypted = await new EncryptJWT(data)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .encrypt(secretKey);

  // Convert to Base64URL encoding (already safe for URLs)
  const token = Buffer.from(encrypted).toString("base64url");

  // console.log("Encrypted Token:", token);

  // Redirect to tools.anix7.in
  redirect(`https://tools.anix7.in/link/${token}`);
}

export default async function Page({ params }) {
  const alias = (await params).shortCode;
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_NAME);
  const collection = db.collection("shorturls");

  const doc = await collection.findOne({ alias });

  if (!doc) {
    return notFound();
  }

  if (doc.adsLabel === 0) {
    return redirect(doc.longUrl);
  } else {
    await encryptAndRedirect({
      longUrl: doc.longUrl,
      adsLabel: doc.adsLabel,
    });
  }

  return <div>Redirecting...</div>;
}
