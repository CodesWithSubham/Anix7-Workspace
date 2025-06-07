// /app/api/balance/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "@shared/lib/db";
import User from "@shared/models/User";
import { auth } from "@shared/lib/auth/auth";

export async function GET(req) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectToDatabase();
    const { balance } = await User.findOne({ email: session.user.email });

    // Return the balance
    return NextResponse.json({ success: true, balance }, { status: 200 });
  } catch (error) {
    console.error("Error in balance API:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
