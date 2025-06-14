// /app/api/balance/route.js
import { NextResponse } from "next/server";
import { auth } from "@shared/lib/auth";
import getUserModel from "@shared/lib/db/models/User";

export async function GET(req) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const User = await getUserModel();
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
