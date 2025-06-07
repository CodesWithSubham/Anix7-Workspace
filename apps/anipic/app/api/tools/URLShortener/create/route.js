// app/api/tools/URLShortener/create/route.js

import { generateAlias, getUrl } from "@/lib/UrlShortener"; // Import functions
import { NextResponse } from "next/server"; // NextResponse for API response
import ShortUrl from "@/models/ShortUrl"; // Import ShortUrl model
import connectToDatabase from "@/lib/db"; // Import DB connection function
import { auth } from "@/auth";

async function isValidURL(url, disallowedDomains) {
  // Construct a regular expression pattern to match disallowed domains
  const disallowedPattern = `^https:\\/\\/(?:${disallowedDomains.join('|')})\\b`;
  let disallowedRegex = new RegExp(disallowedPattern, 'i');

  // Regular expression pattern to match a URL with only https (excluding localhost)
  const urlPattern = /^https:\/\/((?!localhost)[\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
  let urlRegex = new RegExp(urlPattern);

  // Test the URL against both URL pattern and disallowed domain pattern
  return urlRegex.test(url) && !disallowedRegex.test(url);
}


// Handle POST request
export async function POST(req) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const uploadedBy = session.user.userId


    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const { longUrl, alias } = await req.json(); // Expecting a 'longUrl' in the body

    // Invalid alias if not: 1. alphanumeric and numberic, 2. length other then 6, 3. not already taken
    if (alias && (!/^[a-zA-Z0-9]+$/.test(alias) || alias.length !== 6 || await ShortUrl.findOne({ alias }))) { // Check if alias is valid
      return NextResponse.json({ success: false, message: "Invalid alias" }, { status: 400 });
    }

    if (!longUrl) {
      // If no long URL is provided
      return NextResponse.json({ success: false, message: "Long URL is required" }, { status: 400 });
    }

    // List of blocked domains
    const disallowedDomains = [
      process.env.SHORT_URL,
      "bit.ly", "tinyurl.com", "t.co", "goo.gl", "rebrandly.com", "shorte.st",
      "ow.ly", "adf.ly", "sh.st", "clk.ru", "linkbucks.com",
      "localhost", "127.0.0.1", "0.0.0.0",
      "malware-site.com", "examplephish.com", "fakebank-login.com",
      "freehosting.com", "webhostapp.com", "000webhost.com"
    ];
    if (!await isValidURL(longUrl, disallowedDomains)) {
      // If the URL is not valid
      return NextResponse.json({ success: false, message: "This URL Not Allowed!" }, { status: 400 });
    }



    // Check if a shortened URL for this long URL already exists
    if (!alias) {
      const existingUrl = await ShortUrl.findOne({ longUrl, uploadedBy });
      if (existingUrl) {
        // If the URL already exists, return the existing shortened URL
        return NextResponse.json({ 
          success: true,
          shortUrl: `${process.env.SHORT_URL}/${existingUrl.alias}`,
          result: existingUrl,
          isNew: false
        });
      }
    }

    // Generate a unique alias (6 characters long)
    const newAlias = alias || await generateAlias();

    // Create a new ShortUrl record
    const shortUrl = new ShortUrl({
      alias: newAlias,
      longUrl,
      uploadedBy,
      expiredAt: null, // You can calculate this if necessary
    });

    // Save the new short URL to the database
    await shortUrl.save();

    // Return the response with the new shortened URL
    return NextResponse.json({
      success: true,
      shortUrl: `${process.env.SHORT_URL}/${newAlias}`,
      result: shortUrl,
      isNew: true,
      message: "URL shortened successfully",
    }, { status: 201 });
  } catch (error) {
    console.error("Error in URL shortening:", error);

    // Return an error response in case of failure
    return NextResponse.json(
      { success: false, message: "Failed to shorten URL" },
      { status: 500 }
    );
  }
}
