import { auth } from "@shared/lib/auth";
import getShortUrlModel from "@shared/lib/db/models/ShortUrl";
import { NextResponse } from "next/server";

// Function to get URLs by uploadedBy with pagination (start and limit of 10)
async function getUrlsByUploadedBy(uploadedBy: number, start = 0, limit = 10) {
  const ShortUrl = await getShortUrlModel();

  // Get the URLs for a given uploadedBy with pagination
  const urls = await ShortUrl.find({ uploadedBy })
    .select("longUrl alias adsLabel createdAt")
    .sort({ createdAt: -1 }) // Sort by creation date (descending)
    .skip(start) // Skip the first 'start' number of documents
    .limit(limit) // Limit to the next 10 URLs after 'start'
    .lean();

  // Get total count of URLs for a given uploadedBy
  const totalUrlsCount = await ShortUrl.countDocuments({ uploadedBy });

  return {
    urls,
    totalUrlsCount,
    BASE_URL: process.env.SHORT_URL,
  };
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || !session.user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const { userId } = session.user;
    // const userId = 1234567890

    const { page } = await req.json(); // Destructure directly from req.json()

    const limit = 20;
    const skip = page ? page * limit : 0;

    // Get the URL using the userId
    const results = await getUrlsByUploadedBy(userId, skip, limit);

    // Return the response with availability status
    return NextResponse.json({
      success: true,
      results, // If url is null or undefined, available will be true
    });
  } catch (error) {
    console.error("Error occurred:", error);

    // Return an error response
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
}
