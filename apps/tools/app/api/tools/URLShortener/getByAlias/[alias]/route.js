import getShortUrlModel from "@shared/lib/db/models/ShortUrl";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { alias } = await params
  const ShortUrl = await getShortUrlModel();
  const shortUrl = await ShortUrl.findOne({ alias }).lean();

  if (!shortUrl) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json({
    longUrl: shortUrl.longUrl,
    adsLabel: shortUrl.adsLabel,
  });
}
