
import { auth } from "@shared/lib/auth";
import getShortUrlModel from "@shared/lib/db/models/ShortUrl";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const session = await auth();
    if (!session)
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );

    const { alias } = await req.json();
    if (!alias)
      return NextResponse.json(
        { success: false, error: "Invalid Image Alias!" },
        { status: 400 }
      );

    const ShortUrl = await getShortUrlModel();

    const image = await ShortUrl.findOneAndDelete({
      alias,
      uploadedBy: session.user.userId,
    });
    if (!image)
      return NextResponse.json(
        { success: false, error: "Nothing to Delete!" },
        { status: 400 }
      );

    return NextResponse.json({
      success: true,
      message: "URL deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error during deletion" },
      { status: 500 }
    );
  }
}
