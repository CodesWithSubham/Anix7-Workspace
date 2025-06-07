import { auth } from "@/auth";
import { getUrl } from "@/lib/UrlShortener";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { alias } = await req.json(); // Destructure directly from req.json()

    // Invalid alias if not: 1. alphanumeric and numberic, 2. length other then 6, 3. not already taken
    if (!/^[a-zA-Z0-9]+$/.test(alias) || alias.length !== 6) { // Check if alias is valid
      return NextResponse.json({ success: false, message: "Invalid alias" }, { status: 400 });
    }

    // Get the URL using the alias
    const url = await getUrl(alias);

    // Return the response with availability status
    return NextResponse.json({
      success: true,
      available: !url,  // If url is null or undefined, available will be true
    });
  } catch (error) {
    console.error('Error occurred:', error);

    // Return an error response
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing the request.',
    }, { status: 500 });
  }
}
