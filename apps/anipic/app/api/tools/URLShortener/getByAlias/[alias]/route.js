import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import ShortUrl from "@/models/ShortUrl";

export async function GET(req, { params }) {
  const { alias } = await params
  await connectToDatabase();
  const shortUrl = await ShortUrl.findOne({ alias }).lean();

  if (!shortUrl) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json({
    longUrl: shortUrl.longUrl,
    adsLabel: shortUrl.adsLabel,
  });
}
