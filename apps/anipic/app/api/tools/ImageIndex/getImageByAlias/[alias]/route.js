import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import ImageIndex from "@/models/ImageIndex";

export async function GET(req, { params }) {
  await connectToDatabase();
  const { alias } = await params
  const image = await ImageIndex.findOne({ alias }).lean();

  if (!image) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json({
    image: `${process.env.IMGUR_IMAGE_URL}/${image.alias}.${image.extension}`,
    adsLabel: image.adsLabel,
  }, {
    headers: {
      "Access-Control-Allow-Origin": process.env.BASE_URL, // Restrict to same domain
    },
  });
}
