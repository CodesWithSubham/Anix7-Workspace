// app\api\tools\ImageIndex\upload\route.js

import { auth } from "@shared/lib/auth";
import connectToDatabase from "@shared/lib/db";
import ImageIndex from "@shared/models/ImageIndex";
import { NextResponse } from "next/server";

const MAX_SIZE_MB = 10;
const ALLOWED_FORMATS = ["jpg", "jpeg", "png", "apng", "gif", "tiff"];

function getBase64SizeMB(base64String) {
  // Remove metadata if present (e.g., "data:image/png;base64,")
  let base64Data = base64String.split(",").pop();

  // Count padding characters
  let padding = (base64Data.match(/=*$/) || [""])[0].length;

  // Calculate file size in MB
  let sizeInBytes = (base64Data.length * 3 / 4) - padding;
  return sizeInBytes / (1024 * 1024); // Convert bytes to MB
}

export async function POST(req) {
  try {
    const session = await auth()

    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const uploadedBy = session.user.userId

    const { image, name } = await req.json();

    if (!image || !name) {
      return Response.json({ error: "Image and name are required" }, { status: 400 });
    }

    // Extract file extension & check format
    const ext = name.split(".").pop().toLowerCase();
    if (!ALLOWED_FORMATS.includes(ext)) {
      return Response.json({ error: "Invalid file format" }, { status: 400 });
    }

    // Check file size (base64 size estimate: (4/3) * original bytes)
    const fileSizeMB =getBase64SizeMB(image)
    if (fileSizeMB > MAX_SIZE_MB) {
      return Response.json({ error: "File exceeds 10MB limit" }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.data?.error || "Failed to upload image");
    }

    await connectToDatabase()

    // Create a new ShortUrl record
    const img = new ImageIndex({
      alias: data.data.id,
      deleteHash: data.data.deletehash,
      extension: ext,
      uploadedBy,
      adsLabel: 1,
      expiredAt: null, // You can calculate this if necessary
    });

    // Save the new short URL to the database
    await img.save();

    return NextResponse.json({ success: true, imageUrl: `${process.env.BASE_URL}/i/${img.alias}`, 
    }, { status: 201 });
  } catch (error) {
    console.error("Error in Uploading ImageIndex:", error);

    // Return an error response in case of failure
    return NextResponse.json(
      { success: false, message: "Failed to Upload Image" },
      { status: 500 }
    );
  }
}
