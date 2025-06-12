import connectToDatabase from "@shared/lib/db";
import { generateUniqueUserId } from "@shared/lib/helper";
import User from "@shared/models/User";
import { NextResponse } from "next/server";

const ADMIN_TOKEN = process.env.AUTH_SECRET; // Store the admin token as an environment variable

export async function POST(req) {
  try {
    // Get the admin token from the request headers
    const token = req.headers.get("Authorization")?.split(" ")[1]; // Expecting "Bearer <token>"
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Admin token is required" },
        { status: 403 }
      );
    }

    if (token !== ADMIN_TOKEN) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 403 }
      );
      // throw new Error('Unauthorized');
    }

    // Get the user details from the request body
    const formDatas = await req.json();

    const userData = formDatas.userDetails;

    const { firstName, lastName, email, isVerified, profilePic, referredBy } =
      userData;

    // console.log(userData)
    // Ensure required fields are present
    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, message: "Missing required user fields" },
        { status: 400 }
      );
    }

    // Generate a unique user ID
    const userId = await generateUniqueUserId(10);

    await connectToDatabase();
    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: null,
      isVerified,
      profilePic,
      referredBy, // Store referredBy if available
      userId,
    });

    // Save the new user to MongoDB
    await newUser.save();

    // Respond with the created user
    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
