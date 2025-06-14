// app/(userArea)/url-shortner/action.js
"use server";

import { auth } from "@shared/lib/auth";
import { disallowedDomains } from "./disallowedDomains";
import getShortUrlModel from "@shared/lib/db/models/ShortUrl";

export async function checkAlias({ alias }) {
  try {
    const session = await auth();

    if (!session) {
      return { success: false, message: "Unauthorized", code: 401 };
    }

    if (!/^[a-zA-Z0-9]+$/.test(alias) || alias.length !== 6) {
      return {
        success: false,
        message: "Alias must be 6 characters long and alphanumeric",
        code: 400,
      };
    }

    const ShortUrl = await getShortUrlModel();

    const url = await ShortUrl.findOne({ alias });

    if (url) {
      return {
        success: true,
        message: "Alias is already taken",
        data: { available: false },
      };
    }

    return {
      success: true,
      message: "Alias is available",
      data: { available: true },
    };
  } catch (error) {
    console.error("Error occurred in checkAlias:", error);

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      code: 500,
    };
  }
}

async function isValidURL(url) {
  const disallowedPattern = `^https:\\/\\/(?:${disallowedDomains.join(
    "|"
  )})\\b`;
  const disallowedRegex = new RegExp(disallowedPattern, "i");

  const urlPattern =
    /^https:\/\/((?!localhost)[\w.-]+)\.([a-z]{2,})(:\d{1,5})?(\/.*)?$/i;
  const urlRegex = new RegExp(urlPattern);

  return urlRegex.test(url) && !disallowedRegex.test(url);
}

// Function to generate a random alias
async function generateAlias() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let alias;
  const ShortUrl = await getShortUrlModel();
  do {
    alias = Array.from(
      { length: 6 },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  } while (await ShortUrl.findOne({ alias }));

  return alias;
}

export async function createShortUrl({ longUrl, alias }) {
  try {
    const session = await auth();

    if (!session) {
      return { success: false, message: "Unauthorized" };
    }
    const uploadedBy = session.user.userId;

    // Connect to the database
    const ShortUrl = await getShortUrlModel();

    // Invalid alias if not: 1. alphanumeric and numberic, 2. length other then 6, 3. not already taken
    if (
      alias &&
      (!/^[a-zA-Z0-9]+$/.test(alias) ||
        alias.length !== 6 ||
        (await ShortUrl.findOne({ alias })))
    ) {
      // Check if alias is valid
      return { success: false, message: "Invalid alias" };
    }

    if (!longUrl) {
      // If no long URL is provided
      return { success: false, message: "Long URL is required" };
    }

    if (!(await isValidURL(longUrl))) {
      // If the URL is not valid
      return { success: false, message: "This URL Not Allowed!" };
    }

    // Check if a shortened URL for this long URL already exists
    if (!alias) {
      const existingUrl = await ShortUrl.findOne({ longUrl, uploadedBy });
      if (existingUrl) {
        // If the URL already exists, return the existing shortened URL
        return {
          success: true,
          message: "URL already shortened",
          data: {
            alias: existingUrl.alias,
            shortUrl: `${process.env.SHORT_URL}/${existingUrl.alias}`,
            longUrl: existingUrl.longUrl,
            isNew: false,
          },
        };
      }
    }

    // Generate a unique alias (6 characters long)
    const newAlias = alias || (await generateAlias());

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
    return {
      success: true,
      message: "URL shortened successfully",
      data: {
        alias: shortUrl.alias,
        shortUrl: `${process.env.SHORT_URL}/${newAlias}`,
        longUrl: shortUrl.longUrl,
        isNew: true,
      },
    };
  } catch (error) {
    console.error("Error in URL shortening:", error);

    // Return an error response in case of failure
    return { success: false, message: "Failed to shorten URL" };
  }
}
