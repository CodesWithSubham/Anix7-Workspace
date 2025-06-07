// app\api\tools\ImageIndex\upload\route.js

import { auth } from "@shared/lib/auth/auth";
import connectToDatabase from "@shared/lib/db";
import ImageIndex from "@shared/models/ImageIndex";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

const isAllowed = imageUrl => (() => { try { return new URL(imageUrl).hostname === "lxg5shaoybytmwkf.public.blob.vercel-storage.com"; } catch { return false; } })();

export async function POST(req) {
  const { image, name } = await req.json();

  if (!image || !name) {
    return Response.json({ error: "Image and name are required" }, { status: 400 });
  }

  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const uploadedBy = session.user.userId

    // https://lxg5shaoybytmwkf.public.blob.vercel-storage.com/Hinata%20Hyuga-HjfRtTW3jjLeet1wCGgRlKVHSLi83G.jpg
    if (!isAllowed(image)) {
      return Response.json({ error: "Invalid Image!" }, { status: 401 });
    }

    // Extract file extension & check format
    const ext = name.split(".").pop().toLowerCase()

    const formData = new FormData();
    formData.append("image", image);
    formData.append("type", "url");

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
      },
      body: formData,
      redirect: 'follow',
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

    return NextResponse.json({
      success: true, imageUrl: `${process.env.BASE_URL}/i/${img.alias}`,
    }, { status: 201 });
  } catch (error) {
    console.error("Error in Uploading ImageIndex:", error);

    // Return an error response in case of failure
    return NextResponse.json(
      { success: false, message: "Failed to Upload Image" },
      { status: 500 }
    );
  } finally {
    // Close the database connection
    if (isAllowed(image)) {
      await del(image)
    }
  }
}
