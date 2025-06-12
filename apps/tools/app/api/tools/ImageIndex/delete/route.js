import { auth } from "@shared/lib/auth";
import connectToDatabase from "@shared/lib/db";
import ImageIndex from "@shared/models/ImageIndex";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    const uploadedBy = session.user.userId;

    const { alias } = await req.json();

    if (!alias) {
      return NextResponse.json(
        { success: false, error: "Invalid Image Alias!" },
        { status: 400 }
      );
    }
    await connectToDatabase();
    const image = await ImageIndex.findOne({ alias, uploadedBy });
    if (!image) {
      return NextResponse.json(
        { error: "Nothing to Delete!", success: false },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.imgur.com/3/image/${image.deleteHash}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        },
      }
    );
    const data = await response.json();

    if (!response.ok && response.status !== 404) {
      return NextResponse.json(
        {
          success: false,
          error: data.data?.error || "Failed to delete image!",
        },
        { status: response.status }
      );
    }

    await image.deleteOne();
    return NextResponse.json(
      { success: true, message: "Image deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error during deletion" },
      { status: 500 }
    );
  }
}
