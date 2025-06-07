import { auth } from "@/auth";
import connectToDatabase from "@/lib/db";
import ShortUrl from "@/models/ShortUrl";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { alias, ad } = await req.json(); // Destructure directly from req.json()

    // Return False is ad is other than 0, 1, 2, 3
    if (ad !== 0 && ad !== 1 && ad !== 2 && ad !== 3) {
      return NextResponse.json({ success: false, message: "Invalid waiting type" }, {status: 400});
    }
    // Return False if alias is empty
    if (!alias || alias.trim().length !== 6) {
      return NextResponse.json({ success: false, message: "Alias is required" }, {
        status: 400});
    }


    // Get the URL using the alias
    await connectToDatabase()
    const url = await ShortUrl.findOne({ alias })
    if (!url) {
      return NextResponse.json({ success: false, message: "Alias not found" }, { status: 404 })
    }
    // Check if the URL is already shortened
    if (url.adsLabel === ad) {
      return NextResponse.json({ success: true, message: "Waiting already updated" }, {
        status: 200
      })
    }
    // Update the URL with the new ad
    url.adsLabel = ad
    await url.save()
    return NextResponse.json({ success: true, message: "Waiting updated successfully" }, { status: 200 })

  } catch (error) {
    console.error('Error occurred while Url Ad Updating:', error)

    // Return an error response
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing the request.',
    }, { status: 500 });
  }
}
